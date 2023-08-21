import { configureStore } from '@reduxjs/toolkit';
import listReducer from "./List.slice";

export const store =  configureStore({
  reducer: {
    list: listReducer,
  }
})

console.log(store.getState())