import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomeData: [
    { id: 1, desc: "salary", amount: 25000 },
    { id: 2, desc: "bitcoin", amount: 10000 },
    { id: 3, desc: "sold phone", amount: 15000 },
  ],
};
const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    ADD_INCOME(state, { payload }) {
      state.incomeData.push(payload);
    },
    DEL_INCOME(state, { payload }) {
      const filteredData = state.incomeData.filter((i) => i.id !== payload);
      state.incomeData = filteredData;
    },
  },
});

export const INCOME_DATA = (state) => state.income.incomeData;
export const { ADD_INCOME, DEL_INCOME } = incomeSlice.actions;
export default incomeSlice.reducer;
