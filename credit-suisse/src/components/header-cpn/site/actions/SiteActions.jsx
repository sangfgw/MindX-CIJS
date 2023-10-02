import { Stack, Button, Typography } from "@mui/material";
import UserLoginIcon from "/site/user-login.svg";
import ContactIcon from "/site/phone.svg";
import LocationIcon from "/site/language.svg";

const SiteActions = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap="30px"
      marginLeft="auto"
    >
      <Button
        href="#"
        variant="text"
        startIcon={<img src={UserLoginIcon} alt="User Login Icon" />}
      >
        <Typography
          color="#262626"
          textTransform="capitalize"
          fontSize="0.75rem" // 12px
          fontWeight="bold"
          whiteSpace="nowrap"
        >
          Login
        </Typography>
      </Button>

      <Button
        href="#"
        variant="text"
        startIcon={<img src={ContactIcon} alt="Contact Icon" />}
      >
        <Typography
          variant="inherit"
          color="#262626"
          textTransform="capitalize"
          fontSize="0.75rem" // 12px
          fontWeight="bold"
          whiteSpace="nowrap"
        >
          Contact and Support
        </Typography>
      </Button>

      <Button
        variant="text"
        startIcon={<img src={LocationIcon} alt="Location Icon" />}
      >
        <Typography
          variant="inherit"
          color="#262626"
          textTransform="capitalize"
          fontSize="0.75rem" // 12px
          fontWeight="bold"
          whiteSpace="nowrap"
        >
          Switzerland
        </Typography>
      </Button>

      <Button variant="text">
        <Typography
          variant="inherit"
          color="#262626"
          fontSize="0.75rem" // 12px
          fontWeight="bold"
          whiteSpace="nowrap"
        >
          EN
        </Typography>
      </Button>
    </Stack>
  );
};

export default SiteActions;
