import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { INCOME_DATA } from "../../store/income-slice";
import { EXPENSE_DATA } from "../../store/expense-slice";

export default function Header() {
  const totalIncome = useSelector(INCOME_DATA)
    .map((i) => Number(i.amount))
    .reduce((a, c) => a + c, 0);

  const TotalExpense = useSelector(EXPENSE_DATA)
    .map((i) => Number(i.amount))
    .reduce((a, c) => a + c, 0);

  const bal = Math.abs(totalIncome - TotalExpense);
  const balColor = totalIncome > TotalExpense ? "#34A853" : "#EA4335";

  return (
    <Box style={{ padding: "0 2rem" }} sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#fff" }} position="static">
        <Toolbar>
          <Typography color={"#221F1F"} fontWeight={600} variant="h5">
            Balance : <span style={{ color: balColor }}>{bal}</span>
          </Typography>

          <Typography
            variant="h4"
            fontWeight="500"
            align="center"
            component="div"
            sx={{ flexGrow: 1, color: "#221F1F" }}
          >
            Expense Tracker App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
