import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { ADD_EXPENSE } from "../../store/expense-slice";
import { v4 as uuidv4 } from "uuid";

export default function ExpenseForm(props) {
  const { desc, setDesc, amount, setAmount } = props;

  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    if (desc.trim().length === 0 && amount.trim().length === 0) return;
    dispatch(ADD_EXPENSE({ desc, amount, id: uuidv4() }));
    setDesc("");
    setAmount("");
  }

  return (
    <form onSubmit={submitHandler}>
      <TextField
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        style={{ width: "70%" }}
        id="outlined-expense"
        label="Description"
        variant="outlined"
        size="small"
        className="expense_input"
      />
      <TextField
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        id="outlined-basic"
        label="amount"
        variant="outlined"
        type="number"
        size="small"
        autoComplete="off"
        style={{ width: "20%", marginLeft: "10%" }}
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "tomato" }}
          fullWidth
          type="submit"
        >
          submit
        </Button>
      </div>
    </form>
  );
}
