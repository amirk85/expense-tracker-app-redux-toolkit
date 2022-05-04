import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Form({ btnColor }) {
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        type="text"
        sx={{ marginRight: "1rem" }}
      />
      <TextField
        id="outlined-basic"
        label="amount"
        type="number"
        variant="outlined"
      />
      <br />
      <br />
      <TextField id="outlined-basic" type="date" variant="outlined" />
      <br />
      <br />
      <Button
        style={{ backgroundColor: btnColor }}
        variant="contained"
        fullWidth
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
