import { Typography } from "@mui/material";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpenseRoot() {
  return (
    <div>
      <Typography variant="h4">Expenses</Typography>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}
