/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import { styled } from "@mui/system";

const StyledSectionWrapper = styled(Stack)(() => ({
  direction: "column",
  // paddingTop: "5.375rem" /* 86px */,
  paddingInline: "0.9375rem" /* 15px */,
}));

const SectionWrapper = ({ children }) => {
  return <StyledSectionWrapper>{children}</StyledSectionWrapper>;
};

export default SectionWrapper;
