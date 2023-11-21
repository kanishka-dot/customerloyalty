import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";


const initialState = {
   firstname:"",
   lastname:"",
   address:""
}

export const createNewCustomer = createAsyncThunk('customer/createcustomer', async (payload) =>{
    try {
        const response =  await axios.post('customer/api/v1/createcustomer',
        {
            firstname:payload.firstname,
            lastname:payload.lastname,
            address:payload.address,
            loyalty:null
        } )
        return response.data;
    } catch (error) {
        return error.message
    }

})

const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{
        handleTextChange:(state,{payload})=>{
           state[payload.name] = payload.value     
        },
        handleFieldReset:(state)=>{
            state.firstname = "";
            state.lastname ="";
            state.address ="";
        }
    },
    extraReducers(builder){
        builder.addCase(createNewCustomer.fulfilled,(state,action)=>{
            state.firstname="";
            state.lastname="";
            state.address="";
           console.log("User created sucessfully");
        })

    }
})

export const {handleTextChange,handleFieldReset} = customerSlice.actions;

export default customerSlice.reducer;
