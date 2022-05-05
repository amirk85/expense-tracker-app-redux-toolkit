import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function IncomeForm() {
  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        type="text"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="amount"
        variant="outlined"
        type="number"
        size="small"
        autoComplete="off"
        style={{ width: "100px", marginLeft: "1rem" }}
      />
      <div style={{ marginTop: "1rem" }}>
        <Button variant="contained" fullWidth>
          submit
        </Button>
      </div>
    </form>
  );
}
