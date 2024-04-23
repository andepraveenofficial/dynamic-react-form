import { configureStore } from "@reduxjs/toolkit";
import selectFormSlice from "./Slices/selectFormSlice";
import finalFormSlice from "./Slices/finalFormSlice";

const appStore = configureStore({
  reducer: {
    selectForm:selectFormSlice,
    finalForm:finalFormSlice
  },
});

export default appStore;