import { Paper, Typography } from "@mui/material";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpenseRoot() {
  return (
    <Paper style={{ marginTop: "1rem", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography margin={"1rem 0"} variant="h4">
          Add Expense
        </Typography>
        <Typography variant="h5">Total: 1000</Typography>
      </div>
      <ExpenseForm />
      <ExpenseList />
    </Paper>
  );
}
