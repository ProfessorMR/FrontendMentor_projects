import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGeoData } from "../services";

const initialState = {
  item: [],
  status: null,
};

export const fetchGeodata = createAsyncThunk(
  "/ip/fetchGeoData",
  async ({ initKeySearch, initValueSearch }) => {
    const response = await getGeoData(initKeySearch, initValueSearch);

    return response.data;
  }
);

const ipSlice = createSlice({
  name: "ip",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeodata.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchGeodata.fulfilled, (state, action) => {
        state.status = "success";
        state.item = action.payload;
      })
      .addCase(fetchGeodata.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default ipSlice.reducer;
