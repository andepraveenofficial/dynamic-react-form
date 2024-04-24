import { createSlice } from "@reduxjs/toolkit";

/* -----> Intial State <----- */
const initialState = false;

const checkConsoleSlice = createSlice({
    name:"checkConsole",
    initialState,
    reducers:{
        checkConsoleTrigger:(state, action) => {
            return action.payload
        }
    }
})

/* ------> Export <----- */
export const {checkConsoleTrigger} = checkConsoleSlice.actions;
export default checkConsoleSlice.reducer;