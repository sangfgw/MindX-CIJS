/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#862796",
    },
  },
});

const CreateExpenseButton = ({ openFormHandler }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        sx={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          fontSize: "18px",
          fontWeight: "bold",
        }}
        onClick={openFormHandler}
      >
        Add New Expense
      </Button>
    </ThemeProvider>
  );
};

export default CreateExpenseButton;
