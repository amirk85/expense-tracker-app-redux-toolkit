import React from "react";
import { useSelector } from "react-redux";
import { INCOME_DATA } from "../../store/income-slice";
import IncomeItem from "./IncomeItem";
import { v4 as uuidv4 } from "uuid";
import { Paper } from "@mui/material";

export default function IncomeList() {
  const data = useSelector(INCOME_DATA);

  const renderData = data.map((income) => (
    <IncomeItem key={uuidv4()} income={income} />
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
