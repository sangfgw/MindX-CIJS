import { useState } from "react";
import { Box } from "@mui/material";
import CreateExpenseButton from "../../expense-cpn/actions/CreateExpenseButton";
import CreateExpenseForm from "../../expense-cpn/CRUD/CreateExpenseForm";

const Header = () => {
  // Using useState Hook
  const [isCreateExpenseOpen, setIsCreateExpenseOpen] = useState(false);

  // Function: expense form open handler
  const expenseFormOpenHandler = () => {
    setIsCreateExpenseOpen(true);
  };

  // Function: expense form close handler
  const expenseFormCloseHandler = () => {
    setIsCreateExpenseOpen(false);
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
        <CreateExpenseForm closeFormHandler={expenseFormCloseHandler} />
      ) : (
        <CreateExpenseButton openFormHandler={expenseFormOpenHandler} />
      )}
    </Box>
  );
};

export default Header;
