import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import { ADD_INCOME } from "../../store/income-slice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function IncomeForm(props) {
  const { desc, setDesc, amount, setAmount } = props;

  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    if (desc.trim().length === 0 && amount === 0) alert("amir");
    dispatch(ADD_INCOME({ desc, amount, id: uuidv4() }));
    setDesc("");
    setAmount("");
  }

  return (
    <form onSubmit={submitHandler}>
      <TextField
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        autoComplete="off"
        type="text"
        style={{ width: "70%" }}
        id="outlined-income"
        label="Description"
        variant="outlined"
        size="small"
        className="income_input"
      />
      <TextField
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        id="outlined-basic"
        label="amount"
        variant="outlined"
        type="number"
        inputProps={{ min: 0 }}
        size="small"
        autoComplete="off"
        style={{ width: "20%", marginLeft: "10%" }}
      />
      <div style={{ marginTop: "1rem" }}>
        <Button type="submit" variant="contained" fullWidth>
          submit
        </Button>
      </div>
    </form>
  );
}
