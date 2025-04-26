import { createSlice } from "@reduxjs/toolkit";
import { refresh } from "aos";


const initialState={
    isSuccess:null,
    isError:null,
    isLoading:false,
    user:null,
    access:null,
    refresh:null
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            const { access,refresh,user }=action.payload
            state.user=user,
            state.access=access,
            state.refresh=refresh
        },
        logout:(state)=>{
            state.user=null,
            state.access=null,
            state.refresh=null
        },
        reset:(state)=>{
            state.isSuccess=null,
            state.isError=null,
            state.isLoading=false
        }
    },
    extraReducers:(builder)=>{
        builder
    }
})


export const { setCredentials,logout,reset } =userSlice.actions
export default userSlice.reducer