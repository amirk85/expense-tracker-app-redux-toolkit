import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseData: [
    { id: 1, desc: "shopping", amount: 30 },
    { id: 2, desc: "shopping", amount: 30 },
    { id: 3, desc: "shopping", amount: 30 },
  ],
};
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
});

export const EXPENSE_DATA = (state) => state.expense.expenseData;
export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;
