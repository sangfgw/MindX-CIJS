/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";

const CardDateItem = ({ date }) => {
  // Month Option
  const options = { month: "long" };

  return (
    <Stack
      direction="column"
      padding={1.25}
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      bgcolor="#1A1A1A"
      border="1px solid #FFF"
      borderRadius="12px"
      width="114px"
      height="114px"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" fontSize="0.875rem">
        {new Intl.DateTimeFormat("en-US", options).format(new Date(date))}h
      </Typography>
      <Typography variant="h3" fontSize="0.875rem" fontWeight="bold" mt={1.25}>
        {new Date(date).getFullYear()}
      </Typography>
      <Typography variant="h3" fontSize="1.5rem" fontWeight="bold" mt={1.25}>
        {new Date(date).getDate()}
      </Typography>
    </Stack>
  );
};

export default CardDateItem;
