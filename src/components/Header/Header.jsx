import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useSelector } from "react-redux";
import { INCOME_DATA } from "../../store/income-slice";
import { EXPENSE_DATA } from "../../store/expense-slice";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Header() {
  const totalIncome = useSelector(INCOME_DATA)
    .map((i) => i.amount)
    .reduce((a, c) => a + c, 0);

  const TotalExpense = useSelector(EXPENSE_DATA)
    .map((i) => i.amount)
    .reduce((a, c) => a + c, 0);

  const bal = Math.abs(totalIncome - TotalExpense).toFixed(2);
  const balColor = totalIncome > TotalExpense ? "#34A853" : "#EA4335";

  return (
    <Box style={{ padding: "0 2rem" }} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#fff" }}>
          <Typography fontWeight={600} variant="h5" sx={{ color: "#333" }}>
            Balance : <span style={{ color: balColor }}>{bal}</span>
          </Typography>

          <Typography
            variant="h4"
            fontWeight="500"
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
