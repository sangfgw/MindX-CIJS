import { Box } from "@mui/material";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Header
        title="Sign up for an account"
        description="Signing up for an account is free and easy. Fill out the form below to get started. Javascript is required to continue."
      />
      <SignUpForm
        description={
          'By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy. '
        }
      />
    </Box>
  );
}

export default App;
