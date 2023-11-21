import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";


const initialState = {
    points:0,
    customerId:"",
    cutomerName:"",
    customers:[]
 }

 export const fetchCustomers = createAsyncThunk('customer/fetchCustomers', async () =>{
    try {
        const response = await axios.get("/customer/api/v1/getllcustomers");
        return response.data;
    } catch (error) {
        return error.message
    }
})

export const addCustomerPoints = createAsyncThunk('loyalty/addLoyaltyPoints', async () =>{
   try {
       const response = await axios.get("/loyalty/api/v1/addLoyaltyPoints");
       return response.data;
   } catch (error) {
       return error.message
   }
})
 
export const deductCustomerPoints = createAsyncThunk('loyalty/deductLoyalty', async () =>{
   try {
       const response = await axios.get("/loyalty/api/v1/deductLoyaltyPoints");
       return response.data;
   } catch (error) {
       return error.message
   }
})


 const loyaltySlice = createSlice({
    name:"loyalty",
    initialState,
    reducers:{
        handleTextChange:(state,{payload})=>{
            state[payload.name] = payload.value     
         },
         handleTableButtonClick:(state,{payload})=>{
            state.customerId = payload.id;
            state.cutomerName = payload.name;  
         },
    },
    extraReducers(builder){
      builder.addCase(fetchCustomers.fulfilled,(state,action)=>{
       state.customers = [action.payload]
      })     
      .addCase(fetchCustomers.pending,(state)=>{
         state.customers = [];
      })
      .addCase(fetchCustomers.rejected,(state)=>{
         state.customers = [];
      })
      .addCase(addCustomerPoints.fulfilled,(state)=>{

      })
      .addCase(deductCustomerPoints.fulfilled,(state)=>{
         
      })
  }
 })

 export const {handleTextChange,handleTableButtonClick} = loyaltySlice.actions;

 export default loyaltySlice.reducer;
