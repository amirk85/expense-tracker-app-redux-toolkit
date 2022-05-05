import { Typography } from "@mui/material";
import React from "react";
import IncomeForm from "./IncomeForm";
import IncomeList from "./IncomeList";

export default function IncomeRoot() {
  return (
    <div>
      <Typography variant="h4">Income</Typography>
      <IncomeForm />
      <IncomeList />
    </div>
  );
}
