import { configureStore } from "@reduxjs/toolkit";
import  counterslice  from "../features/counter/counterslice";
import  todoSlice  from "../features/Todo/todoSlice";

export const store = configureStore({
    reducer : {
        counter : counterslice,
        todos : todoSlice
    }
})