// CREATE EXPENSES AND STORE INSIDE LOCAL STORAGE
const createOrEditExpenses = (expenses: Object) => {
  localStorage.setItem("expenses_by_years", JSON.stringify(expenses));
};

// GET EXPENSES FROM LOCAL STORAGE
const getExpenses = () => {
  return localStorage.getItem("expenses_by_years");
};

export { createOrEditExpenses, getExpenses };
