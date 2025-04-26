import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/userSlicer";



export const store=configureStore({
    reducer:{
        user:userSlice
    }
})