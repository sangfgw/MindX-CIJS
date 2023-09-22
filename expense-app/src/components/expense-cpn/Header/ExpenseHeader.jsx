/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CreateExpenseButton from "../actions/CreateExpenseButton";
import CreateExpenseForm from "../CRUD/CreateExpenseForm";

const ExpenseHeader = ({ createExpenseHandler }) => {
  // Using useState Hook To Control Input Value
  const [isCreateExpenseOpen, setIsCreateExpenseOpen] = useState(false);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState(new Date());

  // Using useState Hook To Control Input Error
  const [expenseNameIsValid, setExpenseNameIsValid] = useState(false);
  const [expenseAmountIsValid, setExpenseAmountIsValid] = useState(false);
  const [expenseDateIsValid, setExpenseDateIsValid] = useState(true);

  // Using useEffect To Handle State Change Effective
  useEffect(() => {
    // Input Validation
    if (expenseName !== "") {
      setExpenseNameIsValid(true);
    } else {
      setExpenseNameIsValid(false);
    }

    if (expenseAmount !== 0) {
      setExpenseAmountIsValid(true);
    } else {
      setExpenseAmountIsValid(false);
    }

    if (expenseDate instanceof Date === true) {
      setExpenseDateIsValid(true);
    } else {
      setExpenseDateIsValid(false);
    }
  }, [expenseName, expenseAmount, expenseDate]);

  // Function: expense form open handler
  const expenseFormOpenHandler = () => {
    setIsCreateExpenseOpen(true);
  };

  // Function: expense form close handler
  const expenseFormCloseHandler = () => {
    setIsCreateExpenseOpen(false);
  };

  // Function: get current input value handler
  const getCurrentInputValue = (inputId) => {
    if (inputId === "expense-name") {
      return expenseName;
    } else if (inputId === "expense-amount") {
      return expenseAmount;
    } else if (inputId === "expense-date") {
      return expenseDate;
    }
  };

  // Function: expense input change handler
  const expenseInputChangeHandler = (inputId, event) => {
    // console.log(inputId, event.target.value);
    if (inputId === "expense-name") {
      setExpenseName(event.target.value);
    } else if (inputId === "expense-amount") {
      setExpenseAmount(Number(event.target.value));
    } else if (inputId === "expense-date") {
      const expenseDate = new Date(event.target.value);
      setExpenseDate(expenseDate);
    }
  };

  // Function: reset input state handler
  const resetInputStateHandler = () => {
    // Reset: Expense Name
    setExpenseName("");

    // Reset: Expense Amount
    setExpenseAmount(0);

    // Reset: Expense Date
    setExpenseDate(new Date());
  };

  // Function: input validation handler
  const inputValidationHandler = () => {
    // Input Validation
    if (expenseName !== "") {
      setExpenseNameIsValid(true);
    } else {
      setExpenseNameIsValid(false);
    }

    if (expenseAmount !== 0) {
      setExpenseAmountIsValid(true);
    } else {
      setExpenseAmountIsValid(false);
    }

    if (expenseDate instanceof Date === true) {
      setExpenseDateIsValid(true);
    } else {
      setExpenseDateIsValid(false);
    }

    return expenseNameIsValid && expenseAmountIsValid && expenseDateIsValid;
  };

  // Function: expense submit handler
  const expenseSubmitHandler = (event) => {
    // Prevent Form Submit Behaviour
    event.preventDefault();

    // If Input Valid
    if (inputValidationHandler()) {
      // Initialize Expense Based on State Value
      const expense = {
        pay: expenseAmount,
        pay_for: expenseName,
        spent_date: expenseDate,
      };

      // Call Create Expense Handler To Create New Expense
      createExpenseHandler(expense);

      // Reset Input State
      resetInputStateHandler();
    }
  };

  return (
    <Box
      sx={{
        width: "1000px",
        padding: "1.75rem",
        background: "#897BDA",
        borderRadius: "12px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        textAlign: "center",
        marginTop: "2.25rem", // 36px
      }}
    >
      {isCreateExpenseOpen ? (
        <CreateExpenseForm
          closeFormHandler={expenseFormCloseHandler}
          expenseSubmitHandler={expenseSubmitHandler}
          currentInputValue={getCurrentInputValue}
          expenseInputHandler={expenseInputChangeHandler}
        />
      ) : (
        <CreateExpenseButton openFormHandler={expenseFormOpenHandler} />
      )}
    </Box>
  );
};

export default ExpenseHeader;
