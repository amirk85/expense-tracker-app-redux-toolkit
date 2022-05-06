import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseData: [
    { id: 1, desc: "shopping", amount: 50000 },
    { id: 2, desc: "shopping", amount: 30 },
    { id: 3, desc: "shopping", amount: 30 },
  ],
  editId: null,
};
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    ADD_EXPENSE(state, { payload }) {
      if (!state.editId) {
        state.expenseData.push(payload);
      } else {
        const updatedData = state.expenseData.map((i) => {
          if (i.id === state.editId) return payload;
          return i;
        });
        state.expenseData = updatedData;
        state.editId = null;
      }
    },
    DEL_EXPENSE(state, { payload }) {
      const filteredData = state.expenseData.filter((i) => i.id !== payload);
      state.expenseData = filteredData;
    },
    SET_EXPENSE_ID(state, { payload }) {
      state.editId = payload;
    },
  },
});

export const EXPENSE_DATA = (state) => state.expense.expenseData;
export const { ADD_EXPENSE, DEL_EXPENSE, SET_EXPENSE_ID } =
  expenseSlice.actions;
export default expenseSlice.reducer;
