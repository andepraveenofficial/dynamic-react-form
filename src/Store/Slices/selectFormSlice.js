import { createSlice } from "@reduxjs/toolkit";

/* -----> Intial State <----- */
const initialState = {selectedForm:null}

const selectFormSlice = createSlice({
    name:"selectForm",
    initialState,
    reducers:{
        selectForm:(state, action) => {
            state.selectedForm = action.payload
        }

    }
})

/* ------> Export <----- */
export const {selectForm} = selectFormSlice.actions;
export default selectFormSlice.reducer;