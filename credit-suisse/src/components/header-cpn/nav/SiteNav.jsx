import { Stack, Button, Typography } from "@mui/material";

const SiteNav = () => {
  // Nav Items
  const navItems = [
    "Private Clients",
    "Wealth Management",
    "Corporate Clients",
    "Investment Banking",
    "Careers",
    "Contact & Support",
    "About Us",
    "Asset Management",
  ];

  // Function: loading nav item handler
  const loadingNavItemsHandler = () => {
    return navItems.map((navItem) => {
      return (
        <Button
          key={navItem}
          variant="text"
          sx={{
            padding: "1.5625rem 1.5625rem 1.3125rem",
            ":hover": {
              "::before": {
                display: "block",
                content: '""',
                height: "2px",
                backgroundColor: "#262626",
                bottom: "1px",
                left: "0",
                position: "absolute",
                width: "100%",
              },
            },
          }} // padding 25px 25px 21px 25px
        >
          <Typography
            variant="body1"
            textTransform="capitalize"
            fontWeight="bold"
            color="#262626"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {navItem}
          </Typography>
        </Button>
      );
    });
  };

  return (
    <Stack direction="row" marginLeft="-1.5rem">
      {loadingNavItemsHandler()}
    </Stack>
  );
};

export default SiteNav;
