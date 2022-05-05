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
  reducers: {},
});

export const INCOME_DATA = (state) => state.income.incomeData;
export const incomeActions = incomeSlice.actions;
export default incomeSlice.reducer;
