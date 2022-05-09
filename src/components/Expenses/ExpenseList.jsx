import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EXPENSE_DATA, SET_EXPENSE_ID } from "../../store/expense-slice";
import { v4 as uuidv4 } from "uuid";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
  const { setDesc, setAmount } = props;
  const data = useSelector(EXPENSE_DATA);
  const dispatch = useDispatch();

  function editHandler(id, desc, amount) {
    dispatch(SET_EXPENSE_ID(id));
    setDesc(desc);
    setAmount(amount);
    document.getElementById("outlined-expense").focus();
    console.log(id);
  }

  const renderData = data.map((income) => (
    <ExpenseItem key={uuidv4()} income={income} onEdit={editHandler} />
  ));

  return (
    <div
      style={{
        maxHeight: 300,
        overflow: "auto",
        marginTop: "1rem",
      }}
    >
      {renderData}
    </div>
  );
}
