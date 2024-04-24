import { createSlice } from "@reduxjs/toolkit";

/* -----> Intial State <----- */
const initialState = [];

const finalFormSlice = createSlice({
    name:"finalForm",
    initialState,
    reducers:{
        addForm:(state, action) => { 
            state.push(action.payload);
        },

        editForm: (state, action) => {
            const { uniqueId, value } = action.payload;
            return state.map((each) => {
                if (uniqueId === each.id) {
                    return { ...each, value: value };
                }
                return each;
            });
    }
}})

/* ------> Export <----- */
export const {addForm, editForm} = finalFormSlice.actions;
export default finalFormSlice.reducer;