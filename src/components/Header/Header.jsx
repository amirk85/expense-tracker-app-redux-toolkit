import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { INCOME_DATA, TOGGLE_THEME } from "../../store/income-slice";
import { EXPENSE_DATA } from "../../store/expense-slice";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.income.theme);

  function toggleThemeHandler() {
    dispatch(TOGGLE_THEME());
  }

  const totalIncome = useSelector(INCOME_DATA)
    .map((i) => i.amount)
    .reduce((a, c) => a + c, 0);

  const TotalExpense = useSelector(EXPENSE_DATA)
    .map((i) => i.amount)
    .reduce((a, c) => a + c, 0);

  const bal = Math.abs(totalIncome - TotalExpense);
  const balColor = totalIncome > TotalExpense ? "#34A853" : "#EA4335";

  return (
    <Box style={{ padding: "0 2rem" }} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: theme.bg }}>
          <Typography fontWeight={600} variant="h5" sx={{ color: theme.color }}>
            Balance : <span style={{ color: balColor }}>{bal}</span>
          </Typography>

          <Typography
            variant="h4"
            fontWeight="500"
            align="center"
            component="div"
            sx={{ flexGrow: 1, color: theme.color }}
          >
            Expense Tracker App
          </Typography>
          <DarkModeIcon
            style={{ backgroundColor: theme.bg, color: theme.color }}
            onClick={toggleThemeHandler}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
