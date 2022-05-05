import React from "react";
import { useSelector } from "react-redux";
import { INCOME_DATA } from "../../store/income-slice";
import IncomeItem from "./IncomeItem";
import { v4 as uuidv4 } from "uuid";

export default function IncomeList() {
  const data = useSelector(INCOME_DATA);

  const renderData = data.map((income) => (
    <IncomeItem key={uuidv4()} income={income} />
  ));

  return <div>{renderData}</div>;
}
