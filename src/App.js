import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      {/* passing props from child component to parent component */}
      <NewExpenses onAddExpense={addExpenseHandler} />
      {/* passing props from parent component to child component */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
