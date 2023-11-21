import {configureStore } from '@reduxjs/toolkit'
import customerReducer from '../features/customer/customerSlice'
import loyaltyReducer from '../features/loyalty/loyaltySlice'

export default configureStore ({
    reducer:{
        customer:customerReducer,
        loyalty:loyaltyReducer
    }
})