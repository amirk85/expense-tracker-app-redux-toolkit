import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./income-slice";
import expenseReducer from "./expense-slice";

export const store = configureStore({
  reducer: { income: incomeReducer, expense: expenseReducer },
});
