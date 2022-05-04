import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Form({ btnColor }) {
  return (
    <Box>
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
      >
        Submit
      </Button>
    </Box>
  );
}
