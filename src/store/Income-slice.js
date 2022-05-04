import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {},
});

export const incomeActions = incomeSlice.actions;
export default incomeSlice.reducer;
