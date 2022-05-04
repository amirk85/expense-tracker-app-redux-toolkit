import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
});

export const incomeActions = expenseSlice.actions;
export default expenseSlice.reducer;
