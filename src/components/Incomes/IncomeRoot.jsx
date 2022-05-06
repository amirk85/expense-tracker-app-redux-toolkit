import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { INCOME_DATA } from "../../store/income-slice";
import IncomeForm from "./IncomeForm";
import IncomeList from "./IncomeList";

export default function IncomeRoot() {
  const [desc, setDesc] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const totalIncome = useSelector(INCOME_DATA)
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
          Add Income
        </Typography>
        <Typography variant="h5">Total: {totalIncome}</Typography>
      </div>
      <IncomeForm
        desc={desc}
        setDesc={setDesc}
        amount={amount}
        setAmount={setAmount}
      />
      <IncomeList setDesc={setDesc} setAmount={setAmount} />
    </Paper>
  );
}
