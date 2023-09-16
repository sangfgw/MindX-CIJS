/* eslint-disable react/prop-types */
import FormInput from "./FormInput";
import { Button } from "@mui/material";
import classes from "./SignUpForm.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#45b1e4",
    },
  },
});

const SignUpForm = ({ description }) => {
  return (
    <form className={classes["form-control"]}>
      <FormInput labelName="Username" id="username" type="text" />
      <FormInput
        labelName="Password (4 characters minimum)"
        id="password"
        type="password"
      />

      <FormInput
        labelName="Password Confirm"
        id="password-confirm"
        type="password"
      />

      <FormInput labelName="Email" id="email" type="email" />

      {description && (
        <Typography variant="caption" component="h2" marginY={2}>
          {description}
        </Typography>
      )}

      <ThemeProvider theme={theme}>
        <Button
          sx={{ color: "#ffffff", borderRadius: "8px" }}
          variant="contained"
          id="sign-up-submit"
          className={`${classes["btn"]}`}
          type="submit"
        >
          Đăng ký
        </Button>
      </ThemeProvider>

      <Button
        sx={{ color: "rgb(69, 177, 228)", borderRadius: "8px" }}
        variant="text"
        id="sign-up-cancel"
        className={`${classes["btn"]}`}
        type="button"
      >
        Cancel
      </Button>
    </form>
  );
};

export default SignUpForm;
