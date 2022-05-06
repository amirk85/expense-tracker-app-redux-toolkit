import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseData: [
    { id: 1, desc: "shopping", amount: 50000},
    { id: 2, desc: "shopping", amount: 30 },
    { id: 3, desc: "shopping", amount: 30 },
  ],
};
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    ADD_EXPENSE(state, { payload }) {
      state.expenseData.push(payload);
    },
    DEL_EXPENSE(state, { payload }) {
      const filteredData = state.expenseData.filter((i) => i.id !== payload);
      state.expenseData = filteredData;
    },
  },
});

export const EXPENSE_DATA = (state) => state.expense.expenseData;
export const { ADD_EXPENSE, DEL_EXPENSE } = expenseSlice.actions;
export default expenseSlice.reducer;
