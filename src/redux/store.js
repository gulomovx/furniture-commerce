'use client'
import cartReducer from './ItemSlice'
import { configureStore } from "@reduxjs/toolkit"
export const store = configureStore({
    reducer: {
        counter: cartReducer,
    }
 })