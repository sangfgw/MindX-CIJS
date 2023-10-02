import { Stack } from "@mui/material";
import SiteHeader from "./Site/SiteHeader";
import SiteNav from "./nav/SiteNav";

const Header = () => {
  return (
    <Stack
      direction="column"
      sx={{
        paddingInline: "1.5rem",
        minWidth: "calc(100vw - 1.5rem)",
        borderBottom: "1px solid #e6e7e8",
      }}
    >
      <SiteHeader />
      <SiteNav />
    </Stack>
  );
};

export default Header;
