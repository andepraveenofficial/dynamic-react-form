import { configureStore } from "@reduxjs/toolkit";
import selectFormSlice from "./Slices/selectFormSlice";
import finalFormSlice from "./Slices/finalFormSlice";
import checkConsoleSlice from "./Slices/checkConsoleSlice"
import submitFormSlice from "./Slices/submitFormSlice"

const appStore = configureStore({
  reducer: {
    selectForm:selectFormSlice,
    finalForm:finalFormSlice,
    checkConsole:checkConsoleSlice,
    submitForm:submitFormSlice
  },
});

export default appStore;