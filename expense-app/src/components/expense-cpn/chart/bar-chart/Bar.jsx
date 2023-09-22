import { Stack, Box, Typography } from "@mui/material";

/* eslint-disable react/prop-types */
const Bar = ({ x_axis, data }) => {
  // Function: Expense Percent Each Month Handler
  const expensePercentHandler = () => {
    // Initialize spent amount variable
    let spentAmount = 0;

    // Get Total Spent In Month
    data.spent_logs &&
      data.spent_logs.forEach((log) => {
        const payAmount = Number(log.pay);

        if (payAmount !== 0) {
          spentAmount += payAmount;
        }
      });

    // Convert Expense Spent Per Month Based On Total To Percent
    return data.total !== 0 && spentAmount !== 0
      ? (spentAmount / data.total) * 100
      : 0;
  };

  return (
    <Stack direction="column" alignItems="center" height="200px">
      <Stack
        sx={{
          color: "#000",
          width: "21px",
          height: "100%",
          borderRadius: "50px",
          border: "1px solid #000",
          background: "#BAA5ED",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: `${expensePercentHandler()}%`,
            background: "#3D15A9",
            // borderBottomLeftRadius: "50px",
            // borderBottomRightRadius: "50px",
            borderRadius: `${
              expensePercentHandler() === 100 ? "50px 50px" : "0 0"
            } 50px 50px`,
          }}
        ></Box>
      </Stack>
      <Typography
        variant="caption"
        fontFamily="NovaMono"
        color="#000"
        marginTop="0.625rem"
        marginBottom="0.375rem"
      >
        {x_axis}
      </Typography>
    </Stack>
  );
};

export default Bar;
