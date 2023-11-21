import React, {  useState } from 'react';
import { InputFieldParameter} from './customerParaInputs.js'
import CustomerForm from './CustomerForm.js';
import { useSelector, useDispatch } from 'react-redux';
import { handleTextChange,handleFieldReset,createNewCustomer } from '../../features/customer/customerSlice.js';
import { fetchCustomers } from '../../features/loyalty/loyaltySlice.js';
export default function Customer() {

  const custFieldValues = useSelector((state)=>state.customer)
  const dispatch = useDispatch()
 

  const [formReset, setFormReset] = useState(false);
  const [classes, setClasses] = useState([]);



  const  handelTextChange = (e) =>{
    dispatch(handleTextChange({
      name:e.target.name,
      value:e.target.value
    }))
  }

  const handleReset = (e) =>{
    dispatch(handleFieldReset())
    setFormReset(!formReset)
  }


  const handleFormSubmit = async (e) =>{
    e.preventDefault()
    try {
     dispatch(createNewCustomer(custFieldValues)).unwrap().then(()=>{
      dispatch(fetchCustomers())
      setFormReset(!formReset)
     })
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <CustomerForm handelTextChange={handelTextChange} onSubmitForm={handleFormSubmit} handleReset={handleReset}
    InputFieldParameter={InputFieldParameter} fieldValue={custFieldValues} formReset={formReset} classes={classes} />
  );
}

