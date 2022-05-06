import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCOME_DATA, SET_EDIT_ID } from "../../store/income-slice";
import IncomeItem from "./IncomeItem";
import { v4 as uuidv4 } from "uuid";

export default function IncomeList(props) {
  const { setDesc, setAmount } = props;
  const dispatch = useDispatch();

  function editHandler(id, desc, amount) {
    dispatch(SET_EDIT_ID(id));
    setDesc(desc);
    setAmount(amount);
    document.getElementById("outlined-basic").focus();
  }

  const data = useSelector(INCOME_DATA);

  const renderData = data.map((income) => (
    <IncomeItem key={uuidv4()} income={income} onEdit={editHandler} />
  ));

  return (
    <div
      style={{
        maxHeight: 320,
        overflow: "auto",
        marginTop: "1rem",
      }}
    >
      {renderData}
    </div>
  );
}
