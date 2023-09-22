/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FilterExpense = ({ filterItems, currentYear, yearHandler }) => {
  // Function: menu items handler
  const menuItemsHandler = () => {
    return filterItems.map((filterItem) => {
      return (
        <MenuItem key={filterItem} value={filterItem}>
          {filterItem}
        </MenuItem>
      );
    });
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", fontSize: "18px" }}
      >
        Filter by year
      </Typography>

      <Select
        value={currentYear}
        onChange={yearHandler}
        sx={{
          background: "#ffffff",
          width: "171px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {menuItemsHandler()}
      </Select>
    </Stack>
  );
};

export default FilterExpense;
