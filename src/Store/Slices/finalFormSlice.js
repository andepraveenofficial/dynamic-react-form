import { createSlice } from "@reduxjs/toolkit";

/* -----> Intial State <----- */
const initialState = [];

const finalFormSlice = createSlice({
    name:"finalForm",
    initialState,
    reducers:{
        addForm:(state, action) => {
            console.log(action.payload)
            state.push(action.payload);
        }
    }
})

/* ------> Export <----- */
export const {addForm} = finalFormSlice.actions;
export default finalFormSlice.reducer;