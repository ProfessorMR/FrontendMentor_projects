import { configureStore } from "@reduxjs/toolkit";
import ipSlice from "../reducers/ipSlice";

export const store = configureStore({
  reducer: {
    ip: ipSlice,
  },
});
