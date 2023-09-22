/* eslint-disable react/prop-types */
import {
  FormControl,
  FormControlLabel,
  Typography,
  Input,
  Stack,
  Button,
} from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeBtnAdd = createTheme({
  palette: {
    primary: {
      main: "#7b2e91",
    },
  },
});

const themeBtnCancel = createTheme({
  palette: {
    primary: {
      main: "#d0d0d0",
    },
  },
});

// Styling Form Typography
const styledFormTypography = {
  variant: "subtitle1",
  fontWeight: "bold",
  width: "200px",
  textAlign: "left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

// Styling Form Input
const styledFormInput = {
  marginLeft: "1rem",
  background: "#fff",
  borderRadius: "8px",
  padding: "0.5rem",
  height: "40px",
};

// MM-DD-YYYY Options
const options = { year: "numeric", month: "2-digit", day: "2-digit" };

// Component
const CreateExpenseForm = ({
  closeFormHandler,
  currentInputValue,
  expenseInputHandler,
  expenseSubmitHandler,
}) => {
  // input date value
  const getInputDateValue = () => {
    // MM-DD-YYYY
    const dateArr = new Intl.DateTimeFormat("en-US", options)
      .format(currentInputValue.call(null, "expense-date"))
      .split("/");

    // YYYY-MM-DD
    const formatDate = `${dateArr[2]}-${dateArr[0]}-${dateArr[1]}`;

    return formatDate;
  };

  return (
    <form onSubmit={expenseSubmitHandler}>
      <FormControl fullWidth>
        <FormControlLabel
          htmlFor="expense-name"
          labelPlacement="start"
          label={<Typography {...styledFormTypography}>Name</Typography>}
          control={
            <Input
              type="text"
              id="expense-name"
              placeholder="Enter name here..."
              disableUnderline
              fullWidth
              sx={{
                ...styledFormInput,
              }}
              value={currentInputValue.call(null, "expense-name")}
              onChange={expenseInputHandler.bind(null, "expense-name")}
            />
          }
          sx={{ margin: 0 }}
        />
      </FormControl>

      <FormControl fullWidth>
        <FormControlLabel
          htmlFor="expense-amount"
          labelPlacement="start"
          label={<Typography {...styledFormTypography}>Amount</Typography>}
          control={
            <Input
              type="number"
              id="expense-amount"
              placeholder="Enter amount here..."
              disableUnderline
              fullWidth
              sx={{
                ...styledFormInput,
              }}
              value={currentInputValue.call(null, "expense-amount")}
              onChange={expenseInputHandler.bind(null, "expense-amount")}
            />
          }
          sx={{ margin: "1.5rem 0 0" }}
        />
      </FormControl>

      <FormControl fullWidth>
        <FormControlLabel
          htmlFor="expense-date"
          labelPlacement="start"
          label={<Typography {...styledFormTypography}>Date</Typography>}
          control={
            <Input
              type="date"
              id="expense-date"
              placeholder="dd/mm/yyyy"
              disableUnderline
              fullWidth
              sx={{
                ...styledFormInput,
              }}
              value={getInputDateValue()}
              onChange={expenseInputHandler.bind(null, "expense-date")}
            />
          }
          sx={{ margin: "1.5rem 0 0" }}
        />
      </FormControl>

      <Stack direction="row" justifyContent="flex-end" mt="2rem" gap="1.5rem">
        <ThemeProvider theme={themeBtnAdd}>
          <Button variant="contained" type="submit">
            Add
          </Button>
        </ThemeProvider>

        <ThemeProvider theme={themeBtnCancel}>
          <Button
            variant="contained"
            sx={{ border: "1px solid #7b2e91" }}
            onClick={closeFormHandler}
          >
            Cancel
          </Button>
        </ThemeProvider>
      </Stack>
    </form>
  );
};

export default CreateExpenseForm;
