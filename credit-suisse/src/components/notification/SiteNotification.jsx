import { Stack, Paper, Typography, Icon, Link } from "@mui/material";
import WarningIcon from "/site/warning.svg";

const SiteNotification = () => {
  return (
    <Stack
      my="1.875rem"
      px="1.875rem"
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        variant="outlined"
        sx={{
          padding: "1.25rem 1.5625rem",
          minHeight: "80px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          maxWidth: "1120px",
          backgroundColor: "#DBE9F5",
          borderRadius: 0,
        }}
      >
        <Icon
          sx={{
            marginRight: "0.625rem",
            width: "unset",
            height: "unset",
          }}
        >
          <img src={WarningIcon} alt="Warning Icon" />
        </Icon>
        <Typography variant="body1" fontWeight="bold" lineHeight="1.2">
          Decision to integrate the Swiss business of Credit Suisse into
          UBS:&nbsp;
          <Link href="#" underline="always">
            You will find the latest information here
          </Link>{" "}
          about how we will continue to look after our clients.
        </Typography>
      </Paper>
    </Stack>
  );
};

export default SiteNotification;
