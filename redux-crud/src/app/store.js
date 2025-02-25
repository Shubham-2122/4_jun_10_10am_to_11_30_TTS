import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Slicedata/userSlice";

export default configureStore({
    reducer:{
        user : userSlice
    }
})