import { createSlice } from "@reduxjs/toolkit";

/* -----> Intial State <----- */
const initialState = [];

const submitFormSlice = createSlice({
    name:"submitForm",
    initialState,
    reducers:{
        fieldSubmit:(state, action) => {
            return state
        }
    }
})

/* ------> Export <----- */
export const {fieldSubmit} = submitFormSlice.actions;
export default submitFormSlice.reducer;