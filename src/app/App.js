import ExpenseRoot from "../components/Expenses/ExpenseRoot";
import Header from "../components/Header/Header";
import IncomeRoot from "../components/Incomes/IncomeRoot";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "2rem",
          padding: "0 2rem",
        }}
      >
        <IncomeRoot />
        <ExpenseRoot />
      </div>
    </div>
  );
}
