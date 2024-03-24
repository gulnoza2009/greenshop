import { createSlice } from "@reduxjs/toolkit";
import { plants } from "../data/data";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    plants: plants,
  },
  reducers: {
    
  },
});

export const dataActions = dataSlice.actions;

export const dataReducers = dataSlice.reducer;