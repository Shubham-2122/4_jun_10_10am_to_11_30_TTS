import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    value: 0
}

export const counterslice = createSlice({
    name: 'counter',
    initialState ,
    reducers: {
        Increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        zero: (state) => {
            state.value = 0
        }
    },

})

export const { Increment, decrement,zero } = counterslice.actions;

export default counterslice.reducer;