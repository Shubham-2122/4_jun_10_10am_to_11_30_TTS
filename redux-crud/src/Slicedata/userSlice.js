import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read data
export const readdata = createAsyncThunk(
    "readdata",async(argu,{rejectWithValue})=>{
        const res = await axios.get("http://localhost:3000/users")
        try {
            const resp = res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name:"userDetails",
    initialState:{
        user:[],
        loading:false,
        error:""
    },
    reducers:{
        userpeding : (state)=>{
            state.loading = true
        },
        userfullfiled : (state,action)=>{
            state.loading = false,
            state.user.push(action.payload)
        },
        userrejct : (state,action)=>{
            state.loading = false,
            state.error = action.payload
        }
    }
    ,
    extraReducers:(builder)=>{
        builder
        .addCase(readdata.pending,(state)=>{
            state.loading = true;
        })
        .addCase(readdata.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(readdata.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const {userpeding,userfullfiled,userrejct} = userSlice.actions;

export default userSlice.reducer;
