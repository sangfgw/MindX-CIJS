/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const CardTitleItem = ({ title }) => {
  return (
    <Box flex={1}>
      <Typography variant="h2" fontSize="2.25rem" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
};

export default CardTitleItem;
