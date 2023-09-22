import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import FilterExpense from "./filter/FilterExpense";
import ExpenseBarChart from "./chart/ExpenseChart";
import ExpenseCard from "./expense-card/ExpenseCard";
import ExpenseHeader from "./Header/ExpenseHeader";

import {
  createOrEditExpenses,
  getExpenses,
} from "../../utils/ExpenseLocalStorage";

const Expense = () => {
  // Filter Initialization
  const FILTER_BY_YEAR = [2021, 2022, 2023, 2024];

  // Using useState Hook
  const [filterYear, setFilterYear] = useState(
    FILTER_BY_YEAR.find((element) => element === 2022)
  );

  // Function: year filter handler
  const yearFilterHandler = (event) => {
    setFilterYear(event.target.value);
  };

  // x-axis Initialization
  const X_AXIS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Expenses Data Initialization
  //2021
  const EXPENSES2021 = [
    {
      coordinate: {
        x: X_AXIS[0],
        y: "",
      },
      total: 100,
      spent_logs: [
        {
          pay: 10,
          pay_for: "Some Book 2021",
          spent_date: new Date(2021, 1, 16),
        },
        {
          pay: 10,
          pay_for: "Movie Ticket 2021",
          spent_date: new Date(2021, 5, 16),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[1], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[2], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[3], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[4], y: "" },
      total: 100,
      spent_logs: [
        {
          pay: 60,
          pay_for: "New Bike 2021",
          spent_date: new Date(2021, 5, 8),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[5], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[6], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[7], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[8], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[9], y: "" },
      total: 93.75,
      spent_logs: [
        {
          pay: 75,
          pay_for: "Electricity Bill 2021",
          spent_date: new Date(2021, 10, 10),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[10], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[11], y: "" },
      total: 0,
      spent_logs: [],
    },
  ];

  // 2022
  const EXPENSES2022 = [
    {
      coordinate: {
        x: X_AXIS[0],
        y: "",
      },
      total: 100,
      spent_logs: [
        {
          pay: 30,
          pay_for: "Some Book",
          spent_date: new Date(2022, 1, 16),
        },
        {
          pay: 20,
          pay_for: "Movie Ticket",
          spent_date: new Date(2022, 5, 16),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[1], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[2], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[3], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[4], y: "" },
      total: 100,
      spent_logs: [
        {
          pay: 100,
          pay_for: "New Bike",
          spent_date: new Date(2022, 5, 8),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[5], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[6], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[7], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[8], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[9], y: "" },
      total: 93.75,
      spent_logs: [
        {
          pay: 75,
          pay_for: "Electricity Bill",
          spent_date: new Date(2022, 10, 10),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[10], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[11], y: "" },
      total: 0,
      spent_logs: [],
    },
  ];

  // 2023
  const EXPENSES2023 = [
    {
      coordinate: {
        x: X_AXIS[0],
        y: "",
      },
      total: 100,
      spent_logs: [
        {
          pay: 30,
          pay_for: "Some Book 2023",
          spent_date: new Date(2023, 1, 16),
        },
        {
          pay: 40,
          pay_for: "Movie Ticket",
          spent_date: new Date(2023, 5, 16),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[1], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[2], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[3], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[4], y: "" },
      total: 100,
      spent_logs: [
        {
          pay: 20,
          pay_for: "New Bike 2023",
          spent_date: new Date(2023, 5, 8),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[5], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[6], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[7], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[8], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[9], y: "" },
      total: 93.75,
      spent_logs: [
        {
          pay: 35,
          pay_for: "Electricity Bill 2023",
          spent_date: new Date(2023, 10, 10),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[10], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[11], y: "" },
      total: 0,
      spent_logs: [],
    },
  ];

  // 2024
  const EXPENSES2024 = [
    {
      coordinate: {
        x: X_AXIS[0],
        y: "",
      },
      total: 100,
      spent_logs: [
        {
          pay: 50,
          pay_for: "Some Book 2024",
          spent_date: new Date(2024, 1, 16),
        },
        {
          pay: 20,
          pay_for: "Movie Ticket 2024",
          spent_date: new Date(2024, 5, 16),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[1], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[2], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[3], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[4], y: "" },
      total: 100,
      spent_logs: [
        {
          pay: 70,
          pay_for: "New Bike 2024",
          spent_date: new Date(2024, 5, 8),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[5], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[6], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[7], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[8], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[9], y: "" },
      total: 93.75,
      spent_logs: [
        {
          pay: 15,
          pay_for: "Electricity Bill 2024",
          spent_date: new Date(2024, 10, 10),
        },
      ],
    },
    {
      coordinate: { x: X_AXIS[10], y: "" },
      total: 0,
      spent_logs: [],
    },
    {
      coordinate: { x: X_AXIS[11], y: "" },
      total: 0,
      spent_logs: [],
    },
  ];

  // Expenses By Years
  const EXPENSES_BY_YEARS = {
    [FILTER_BY_YEAR.find((element) => element === 2021)]: EXPENSES2021,
    [FILTER_BY_YEAR.find((element) => element === 2022)]: EXPENSES2022,
    [FILTER_BY_YEAR.find((element) => element === 2023)]: EXPENSES2023,
    [FILTER_BY_YEAR.find((element) => element === 2024)]: EXPENSES2024,
  };

  // Function: create expense handler
  const createExpenseHandler = (expense) => {
    // Month Option
    const options = { month: "long" };

    if (
      Object.keys(expense).length > 0 &&
      expense.spent_date &&
      expense.spent_date instanceof Date &&
      FILTER_BY_YEAR.find((year) => year === expense.spent_date.getFullYear())
    ) {
      // Update Expenses By Years
      setExpensesByYears((prevExpensesYears) => {
        const expensesMonths = prevExpensesYears[
          expense.spent_date.getFullYear()
        ].map((monthlyExpenses) => {
          if (
            monthlyExpenses.coordinate.x ===
            new Intl.DateTimeFormat("en-US", options)
              .format(expense.spent_date)
              .toString()
              .slice(0, 3)
          ) {
            monthlyExpenses.spent_logs.push(expense);
            return monthlyExpenses;
          } else {
            return monthlyExpenses;
          }
        });

        return {
          ...prevExpensesYears,
          [expense.spent_date.getFullYear()]: expensesMonths,
        };
      });
    }
  };

  // If Expenses Not Exist Inside Local Storage Then Create One
  if (getExpenses() == null) {
    createOrEditExpenses(EXPENSES_BY_YEARS);
  }

  // Using useState Hook To Store Expenses Object
  const [expensesByYears, setExpensesByYears] = useState(
    getExpenses() !== null ? JSON.parse(getExpenses()) : EXPENSES_BY_YEARS
  );

  // Using useEffect To Listen State Change To Update
  useEffect(() => {
    createOrEditExpenses(expensesByYears);
  }, [expensesByYears]);

  // Return JSX Element
  return (
    <Stack>
      <ExpenseHeader createExpenseHandler={createExpenseHandler} />
      <Box
        sx={{
          marginTop: "2.75rem", // 44px
          marginBottom: "3rem", // 48px
          padding: "1.875rem 1.875rem 6rem", // 30px 30px 96px
          background: "#1A1A1A",
          borderRadius: "12px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <FilterExpense
          filterItems={FILTER_BY_YEAR}
          currentYear={filterYear}
          yearHandler={yearFilterHandler}
        />

        <ExpenseBarChart
          x_axis={X_AXIS}
          series={
            expensesByYears[
              [FILTER_BY_YEAR.find((element) => element === filterYear)]
            ]
          }
        />

        {expensesByYears[
          [FILTER_BY_YEAR.find((element) => element === filterYear)]
        ].map((expense) => {
          return (
            expense.spent_logs &&
            expense.spent_logs.map((log) => {
              return (
                Object.keys(log).length > 1 && (
                  <ExpenseCard key={self.crypto.randomUUID()} spent={log} />
                )
              );
            })
          );
        })}
      </Box>
    </Stack>
  );
};

export default Expense;
