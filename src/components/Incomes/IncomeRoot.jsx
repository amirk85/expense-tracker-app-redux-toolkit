import { Paper, Typography } from "@mui/material";
import React from "react";
import IncomeForm from "./IncomeForm";
import IncomeList from "./IncomeList";

export default function IncomeRoot() {
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
          Add Income
        </Typography>
        <Typography variant="h5">Total: 1000</Typography>
      </div>
      <IncomeForm />
      <IncomeList />
    </Paper>
  );
}
