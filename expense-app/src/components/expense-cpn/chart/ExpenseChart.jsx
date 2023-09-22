/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import Bar from "./bar-chart/Bar";

const ExpenseBarChart = ({ x_axis, series }) => {
  // Function: Loading Bars Handler
  const loadingBarsHandler = () => {
    return x_axis.map((x_coordinate, index) => {
      return (
        <Bar key={x_coordinate} x_axis={x_coordinate} data={series[index]} />
      );
    });
  };

  return (
    <Stack
      sx={{
        marginTop: "1.25rem",
        background: "#E1CAE4",
        borderRadius: "12px",
        padding: "10px 20px",
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {loadingBarsHandler()}
    </Stack>
  );
};

export default ExpenseBarChart;
