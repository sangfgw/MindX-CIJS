import { Box, Typography, Grid, Button } from "@mui/material";
import ArrowRight from "../../../assets/svg-cpn/ArrowRight";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const SectionLinks = () => {
  // Links
  const links = [
    "Accounts and Cards",
    "Investing",
    "Becoming a client",
    "Mortgages",
    "Savings",
    "Online & Mobile Banking",
  ];

  // Function: loading links handler
  const loadingLinksHandler = () => {
    return links.map((link) => {
      return (
        <Grid item xs={4} key={link}>
          <ThemeProvider theme={theme}>
            <Button
              endIcon={<ArrowRight />}
              href="#"
              sx={{
                padding: 0,
                ":hover": {
                  opacity: 0.6,
                  transition: "none",
                  background: "none",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  marginY: "0.75rem" /* 12px */,
                }}
              >
                {link}
              </Typography>
            </Button>
          </ThemeProvider>
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ background: "#143765", color: "#fff", paddingInline: "14rem" }}>
      <Typography variant="h3" sx={{ fontSize: "32px", paddingY: "1.5rem" }}>
        Quick links
      </Typography>
      <Box sx={{ paddingY: "1.5rem" }}>
        <Grid
          container
          spacing={2}
          sx={{
            "& svg": {
              fill: "white",
            },
          }}
        >
          {loadingLinksHandler()}
        </Grid>
      </Box>
    </Box>
  );
};

export default SectionLinks;
