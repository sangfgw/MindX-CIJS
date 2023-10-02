import { Stack } from "@mui/material";
import SiteLogo from "./logo/SiteLogo";
import SiteActions from "./actions/SiteActions";

const SiteHeader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap="2rem"
      sx={{ height: "60px" }}
    >
      <SiteLogo />
      <SiteActions />
    </Stack>
  );
};

export default SiteHeader;
