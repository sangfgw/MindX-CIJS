/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled Component
const InfoListWrapper = styled(Box)(() => ({
  marginBottom: "1.875rem" /* 30px */,
}));

const StyledTitle = styled(Typography)(() => ({
  fontSize: "1.5rem" /* 24px */,
  fontWeight: "bold",
  borderBottom: "1px solid #192129",
  position: "relative",
  marginBottom: "1.5625rem" /* 25px */,
  paddingBottom: "0.625rem" /* 10px */,

  "::before": {
    content: '""',
    background: "#ee0979",
    position: "absolute",
    bottom: "-1px",
    left: 0,
    height: "1.2px",
    width: "45px",
  },
}));

const StyledList = styled("ul")(() => ({
  listStyleType: "none",
  color: "white",
  paddingLeft: 0,
  margin: 0,
}));

const StyledListItem = styled("li")(() => ({
  ":not(:last-of-type)": {
    marginBottom: "0.625rem" /* 10px */,
  },
}));

// Main Component
const InfoList = ({ title, items }) => {
  return (
    <InfoListWrapper className="info-list-wrapper">
      <StyledTitle>{title}</StyledTitle>

      <StyledList>
        {items.map((item) => {
          return <StyledListItem key={item.id}>{item.children}</StyledListItem>;
        })}
      </StyledList>
    </InfoListWrapper>
  );
};

export default InfoList;
