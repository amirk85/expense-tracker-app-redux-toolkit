import { Typography } from "@mui/material";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpenseRoot() {
  return (
    <div>
      <Typography margin={"2rem 0"} align="center" variant="h4">
        Expenses
      </Typography>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}
