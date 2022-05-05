import { Typography } from "@mui/material";
import React from "react";
import IncomeForm from "./IncomeForm";
import IncomeList from "./IncomeList";

export default function IncomeRoot() {
  return (
    <div
      style={{
        backgroundColor: "red",
        marginTop: "1rem",
        padding: "1rem",
        borderRadius: "4px",
      }}
    >
      <Typography marginBottom={"2rem"} align="center" variant="h4">
        Income
      </Typography>
      <IncomeForm />
      <IncomeList />
    </div>
  );
}
