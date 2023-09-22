/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const CardSpentItem = ({ amount }) => {
  return (
    <Box
      p="0.625rem 1.25rem"
      borderRadius="12px"
      border="1px solid #FFF"
      bgcolor="#862796"
    >
      <Typography variant="h3" fontSize="1.5rem" fontWeight="bold">
        $ {amount}
      </Typography>
    </Box>
  );
};

export default CardSpentItem;
