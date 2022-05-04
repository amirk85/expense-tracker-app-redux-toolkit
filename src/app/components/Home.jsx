import React from "react";
import Balance from "./Balance";
import Expenses from "./Expenses";
import Incomes from "./Incomes";

export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        // flexDirection: "column",
        justifyContent: "space-evenly",
        marginTop: "2rem",
        gap: "2rem",
      }}
    >
      <Balance />
      <Incomes />
      <Expenses />
    </section>
  );
}
