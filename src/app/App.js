import ExpenseRoot from "../components/Expenses/ExpenseRoot";
import IncomeRoot from "../components/Incomes/IncomeRoot";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "2rem",
      }}
    >
      <h1>Balance</h1>
      <IncomeRoot />
      <ExpenseRoot />
    </div>
  );
}
