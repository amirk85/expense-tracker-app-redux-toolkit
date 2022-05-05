import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#f5f5f1" }}>
          <Typography
            variant="h6"
            align="center"
            component="div"
            sx={{ flexGrow: 1, color: "#333" }}
          >
            Expense Tracker App
          </Typography>
          <Switch {...label} defaultChecked />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
