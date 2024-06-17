import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};

const ipSlice = createSlice({
  name: "ip",
  initialState,
  extraReducers: {},
});

export default ipSlice.reducer;
