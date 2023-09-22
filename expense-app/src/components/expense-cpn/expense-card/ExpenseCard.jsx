/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import CardDateItem from "./card-item/CardDateItem";
import CardSpentItem from "./card-item/CardSpentItem";
import CardTitleItem from "./card-item/CardTitleItem";

const ExpenseCard = ({ spent }) => {
  return (
    <Stack
      mt={2.5}
      p={1.25}
      bgcolor="#575757"
      borderRadius="12px"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={1.25}
    >
      <CardDateItem date={spent.spent_date} />
      <CardTitleItem title={spent.pay_for} />
      <CardSpentItem amount={spent.pay} />
    </Stack>
  );
};

export default ExpenseCard;
