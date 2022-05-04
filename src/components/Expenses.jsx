import React from "react";
import Form from "../common/Form";
import List from "../common/List";

export default function Expenses() {
  const btnColor = "#EA4335";

  return (
    <div>
      <Form btnColor={btnColor} />
      <List />
    </div>
  );
}
