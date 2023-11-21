import React, { useEffect, useState } from 'react';
import DataTable from '../common/dataTable.js';
import { InputFieldParameter, TabelCol} from './loyaltyParaInputs.js'
import LoyaltyForm from './LoyaltyForm.js';
import { useDispatch, useSelector } from 'react-redux';
import { handleTextChange, fetchCustomers, handleTableButtonClick, addCustomerPoints, deductCustomerPoints } from '../../features/loyalty/loyaltySlice.js';
import { Button } from 'reactstrap';

export default function Loyalty() {


  const {points, customers, customerId, cutomerName} = useSelector((state)=>state.loyalty)
  const dispatch = useDispatch()

// load data to table when initlaizing
  useEffect(()=>{
    dispatch(fetchCustomers());
    updateTable();
  },[])

  //update tabel when points update
  useEffect(()=>{
    updateTable();
  },[customers])


  
  const  handelTextChange = (e) =>{
    dispatch(handleTextChange({
      name:e.target.name,
      value:e.target.value
    }))
  }

  const tableButtonClick = (customer) =>{

   dispatch(handleTableButtonClick({
      id:customer.id,
      name:customer.firstname
    }))
  }

  const addPointBtnClick = () =>{
    if(points>0 && customerId){
      dispatch(addCustomerPoints({points, customerId})).then((e)=>{
        if(e.payload.updateStatus){
          dispatch(fetchCustomers());
        }
      })
    }
  }

  const deductPointBtnClick = () =>{
    if(points>0 && customerId){
      dispatch(deductCustomerPoints({points, customerId})).then((e)=>{
        if(e.payload.updateStatus){
          dispatch(fetchCustomers());
        }
      })
    }
  }


    const updateTable =  () => {
    if (customers[0]) {
      return customers[0].map((customer) => (
        <tr key={customer.id}>
          <th scope="row">
            {customer.firstname}
          </th>
          <td>
            {customer.lastname}
          </td>
          <td>
            {customer.address}
          </td>
          <td>
            {customer.loyalty.totalpoints}
          </td>
          <td>
            {customer.loyalty.totalredeem}
          </td>
          <td>
            <Button color="primary"  id={customer.id} block onClick={()=>tableButtonClick(customer)}>Update</Button>
          </td>
        </tr>

      ))
    } 
  }


  return (
    <>  
     <LoyaltyForm  handelTextChange={handelTextChange} onPointAdd={addPointBtnClick} onPointsDeduct={deductPointBtnClick}
      InputFieldParameter={InputFieldParameter} fieldValue={points} formReset={null} selectOption={null} cutomerName={cutomerName}/>
        <hr/>
      <DataTable tableCol={TabelCol} tableData={updateTable()}/>
    </>
  );
}

