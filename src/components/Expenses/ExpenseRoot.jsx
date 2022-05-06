import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { EXPENSE_DATA } from "../../store/expense-slice";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpenseRoot() {
  const [desc, setDesc] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const TotalExpense = useSelector(EXPENSE_DATA)
    .map((i) => i.amount)
    .reduce((a, c) => a + c, 0);

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
        <Typography variant="h5">Total: {TotalExpense}</Typography>
      </div>
      <ExpenseForm
        desc={desc}
        setDesc={setDesc}
        amount={amount}
        setAmount={setAmount}
      />
      <ExpenseList setDesc={setDesc} setAmount={setAmount} />
    </Paper>
  );
}
