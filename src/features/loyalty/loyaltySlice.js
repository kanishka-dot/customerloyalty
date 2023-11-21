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

export const addCustomerPoints = createAsyncThunk('loyalty/addLoyaltyPoints', async (payload) =>{
   try {
       const response = await axios.post("/loyalty/api/v1/addLoyaltyPoints",{
        id:payload.customerId,
        pointAdd:payload.points,
        pointDeduct:0
       });
       return response.data;
   } catch (error) {
       return error.message
   }
})
 
export const deductCustomerPoints = createAsyncThunk('loyalty/deductLoyalty', async (payload) =>{
   try {
       const response = await axios.post("/loyalty/api/v1/deductLoyaltyPoints",{
        id:payload.customerId,
        pointAdd:0,
        pointDeduct:payload.points
       });
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
        state.points = 0;
        console.log("Points added sucessfully");
      })
      .addCase(deductCustomerPoints.fulfilled,(state)=>{
        state.points = 0
        console.log("Points deducted sucessfully");
      })
  }
 })

 export const {handleTextChange,handleTableButtonClick} = loyaltySlice.actions;

 export default loyaltySlice.reducer;
