import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomeData: [],
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
  },
});

export const INCOME_DATA = (state) => state.income.incomeData;
export const { ADD_INCOME, DEL_INCOME, SET_INCOME_ID } = incomeSlice.actions;
export default incomeSlice.reducer;
