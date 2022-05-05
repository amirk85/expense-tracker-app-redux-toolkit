import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function ExpenseForm() {
  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="amount"
        variant="outlined"
        size="small"
        autoComplete="off"
        style={{ width: "100px", marginLeft: "1rem" }}
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "tomato" }}
          fullWidth
        >
          submit
        </Button>
      </div>
    </form>
  );
}
