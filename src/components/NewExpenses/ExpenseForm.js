import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  /*
  const [userInput, setUserInput] = useState({
    setTitle: "",
    setAmount: "",
    setDate: "",
  });
  */
  const titlechangehandler = (event) => {
    setTitle(event.target.value);
    /*setUserInput({
        ...userInput,
        setTitle: event.target.value,
      });
    setUserInput((prevState)=>{
        return {...prevState, setTitle: event.target.value};
    });
    */
  };

  const amountchangehandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   setAmount: event.target.value,
    // });
  };

  const datechangehandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     setDate: event.target.value,
    //   });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text"
            value={title}
            onChange={titlechangehandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountchangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={datechangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
