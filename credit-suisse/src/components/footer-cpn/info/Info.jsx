/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled Component
const StyledListTitle = styled(Typography)(() => ({
  fontSize: "0.75rem" /* 12px */,
  fontWeight: "bold",
}));

const StyledList = styled("ul")(() => ({
  listStyleType: "none",
}));

const StyledListItems = styled("li")(() => ({
  paddingTop: "1.25rem" /* 20px */,
}));

// <Main Component>
const Info = ({ title, items }) => {
  // Function: loading list items handler
  const loadingListItemsHandler = () => {
    return items.map((item) => {
      return <StyledListItems key={item.item_id}>{item.link}</StyledListItems>;
    });
  };

  // Return <Main Component>
  return (
    <Stack sx={{ margin: "3.75rem 3.75rem 0 0" /* 60px 60px 0 0 */ }}>
      <StyledListTitle>{title}</StyledListTitle>
      <StyledList>{loadingListItemsHandler()}</StyledList>
    </Stack>
  );
};

export default Info;
