import React from "react";
import { useSelector } from "react-redux";
import { EXPENSE_DATA } from "../../store/expense-slice";
import { v4 as uuidv4 } from "uuid";
import ExpenseItem from "./ExpenseItem";
import { Paper } from "@mui/material";

export default function ExpenseList() {
  const data = useSelector(EXPENSE_DATA);

  const renderData = data.map((income) => (
    <ExpenseItem key={uuidv4()} income={income} />
  ));

  return (
    <Paper
      style={{
        maxHeight: 320,
        overflow: "auto",
        marginTop: "1rem",
      }}
    >
      {renderData}
    </Paper>
  );
}
