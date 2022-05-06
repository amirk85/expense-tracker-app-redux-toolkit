import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomeData: [
    { id: 1, desc: "salary", amount: 50000 },
    { id: 2, desc: "sold phone", amount: 10000 },
    { id: 3, desc: "shares", amount: 30 },
  ],
  editId: null,
  theme: {
    bg: "#fff",
    color: "#221F1F",
  },
};
const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    ADD_INCOME(state, { payload }) {
      if (!state.editId) {
        state.incomeData.push(payload);
      } else {
        const updatedData = state.incomeData.map((i) => {
          if (i.id === state.editId) return { ...payload, id: state.editId };
          return i;
        });
        state.incomeData = updatedData;
        state.editId = null;
      }
    },
    DEL_INCOME(state, { payload }) {
      const filteredData = state.incomeData.filter((i) => i.id !== payload);
      state.incomeData = filteredData;
    },
    SET_INCOME_ID(state, { payload }) {
      state.editId = payload;
    },
    TOGGLE_THEME(state) {
      state.theme.bg = state.theme.bg === "#fff" ? "#221F1F" : "#fff";
      state.theme.color = state.theme.color === "#221F1F" ? "#fff" : "#221F1F";
    },
  },
});

export const INCOME_DATA = (state) => state.income.incomeData;
export const { ADD_INCOME, DEL_INCOME, SET_INCOME_ID, TOGGLE_THEME } =
  incomeSlice.actions;
export default incomeSlice.reducer;
