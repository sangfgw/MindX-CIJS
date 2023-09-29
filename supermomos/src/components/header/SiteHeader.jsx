import {
  Box,
  Button,
  Divider,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import HeaderLogo from "/site/header-logo.svg";

import { styled, alpha } from "@mui/material/styles";
import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#262626",
    },
  },
});

// Menu Component
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

// Nav Items
const NAV_ITEMS = [
  { type: "link", text: "Blog" },
  { type: "link", text: "Socials" },
  { type: "link", text: "Past Socials" },
  { type: "dropdown", text: "Clubs" },
  { type: "link", text: "Contact" },
];

const LINK = "link";
// const DROPDOWN = "dropdown";

// Render Component
const SiteHeader = () => {
  // Using useState For Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function: Loading Link Handler
  const loadingLinkHandler = () => {
    return NAV_ITEMS.map((NAV_ITEM) => {
      return NAV_ITEM.type === LINK ? (
        <ThemeProvider theme={theme} key={NAV_ITEM.text}>
          <Button href="#">
            <Typography
              variant="subtitle2"
              sx={{
                color: "#262626",
                fontWeight: "bold",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
              }}
            >
              {NAV_ITEM.text}
            </Typography>
          </Button>
        </ThemeProvider>
      ) : (
        <React.Fragment key={NAV_ITEM.text}>
          <ThemeProvider theme={theme}>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="text"
              disableElevation
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon sx={{ color: "#262626" }} />}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#262626",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
                {NAV_ITEM.text}
              </Typography>
            </Button>
          </ThemeProvider>

          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              Edit
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Duplicate
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              Archive
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              More
            </MenuItem>
          </StyledMenu>
        </React.Fragment>
      );
    });
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "calc(100vw - 14rem)",
        paddingX: "7rem" /* 112px */,
        paddingY: "1.375rem" /* 22px */,
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={HeaderLogo}
          alt="Supermomos"
          sx={{
            width: "148px",
            aspectRatio: "auto 148 / 33",
          }}
        />
        <Link
          href="#"
          sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        />
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="3rem" /* 48px */
      >
        {loadingLinkHandler()}
      </Stack>
    </Stack>
  );
};

export default SiteHeader;
