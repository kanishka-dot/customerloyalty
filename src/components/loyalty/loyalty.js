import React, { useEffect, useState } from 'react';
import DataTable from '../common/dataTable.js';
import { InputFieldParameter, TabelCol} from './loyaltyParaInputs.js'
import LoyaltyForm from './LoyaltyForm.js';
import { useDispatch, useSelector } from 'react-redux';
import { handleTextChange, fetchCustomers, handleTableButtonClick } from '../../features/loyalty/loyaltySlice.js';
import { Button } from 'reactstrap';

export default function Loyalty() {

  const {points, customers, customerId, cutomerName} = useSelector((state)=>state.loyalty)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchCustomers());
    updateTable();
  },[])

  useEffect(()=>{
    updateTable();
  },[customers])


  
  const  handelTextChange = (e) =>{
    dispatch(handleTextChange({
      name:e.target.name,
      value:e.target.value
    }))
  }

  const tableButtonClick = (e) =>{
    dispatch(handleTableButtonClick({
      id:e.target.name,
      name:e.target.value
    }))
  }

  const addPointBtnClick = () =>{

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
            <Button color="primary"  id={customer.id} block>Update</Button>
          </td>
        </tr>

      ))
    } 
  }

   const handleFormSubmit = async (e) =>{
   
  }

  const [classes, setClasses] = useState([]);

  return (
    <>  
     <LoyaltyForm  handelTextChange={handelTextChange} onPointAdd={addPointBtnClick} onPointsDeduct={null}
      InputFieldParameter={InputFieldParameter} fieldValue={points} formReset={null} selectOption={classes} cutomerName={"pathym siriwardana"}/>
        <hr/>
      <DataTable tableCol={TabelCol} tableData={updateTable()}/>
    </>
  );
}

