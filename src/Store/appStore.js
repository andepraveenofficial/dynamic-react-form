import { configureStore } from "@reduxjs/toolkit";
import selectFormSlice from "./Slices/selectFormSlice";
import finalFormSlice from "./Slices/finalFormSlice";
import checkConsoleSlice from "./Slices/checkConsoleSlice"

const appStore = configureStore({
  reducer: {
    selectForm:selectFormSlice,
    finalForm:finalFormSlice,
    checkConsole:checkConsoleSlice
  },
});

export default appStore;