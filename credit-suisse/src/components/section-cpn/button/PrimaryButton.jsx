/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowRight from "../../../assets/svg-cpn/ArrowRight";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003868",
    },
  },
});

const PrimaryButton = ({ href, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        size="large"
        sx={{
          marginTop: "1.25rem" /* 20px */,
          padding: "1rem 1.5rem" /* 16px 24px */,
          borderRadius: "29px",
          border: "1px solid #003868",
          color: "white",
          "& svg": {
            fill: "#fff",
          },
        }}
        endIcon={<ArrowRight />}
        href={href && href}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default PrimaryButton;
