import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomeData: [
    { id: 1, desc: "salary", amount: 25000 },
    { id: 2, desc: "bitcoin", amount: 10000 },
    { id: 3, desc: "sold phone", amount: 15000 },
  ],
  editId: null,
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
          if (i.id === state.editId)
            return {
              ...payload,
            };
          return i;
        });
        state.incomeData = updatedData;
      }
    },
    DEL_INCOME(state, { payload }) {
      const filteredData = state.incomeData.filter((i) => i.id !== payload);
      state.incomeData = filteredData;
    },
    SET_EDIT_ID(state, { payload }) {
      state.editId = payload;
    },
  },
});

export const INCOME_DATA = (state) => state.income.incomeData;
export const { ADD_INCOME, DEL_INCOME, SET_EDIT_ID } = incomeSlice.actions;
export default incomeSlice.reducer;
