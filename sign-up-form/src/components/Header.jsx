import { Box, Typography } from "@mui/material";

/* eslint-disable react/prop-types */
const Header = ({ title, description }) => {
  return (
    <Box mb={2} width={1000}>
      {title && (
        <Typography variant="h1" fontSize={24} fontWeight="bold">
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="caption" fontSize={16}>
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default Header;
