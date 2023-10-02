import { Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled Component
const StyledCopyrightWrapper = styled(Stack)(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "1.5rem" /* 24px */,
  backgroundColor: "#fff",
  margin: "0 -1.5rem -1.5rem" /* -24px */,
}));

const StyledCopyrightText = styled(Typography)(() => ({
  fontSize: "0.75rem" /* 12px */,
  color: "#262626",
  fontWeight: "bold",
}));

const StyledCIWrapper = styled(Stack)(() => ({
  flexDirection: "row",
  margin: "1.25rem 0" /* 20px */,
}));

const StyledCILink = styled(Link)(() => ({
  textDecoration: "none",
  position: "relative",
  display: "inline-flex",

  ":not(:last-of-type)": {
    "::after": {
      content: '""',
      borderLeft: "1px solid #262626",
      //   marginInline: "0.3125rem" /* 5px */,
      margin: "0.125rem 0.3125rem",
    },
  },
}));

const StyledCIText = styled(Typography)(() => ({
  color: "#727272",
  fontSize: "0.75rem" /* 12px */,
  fontWeight: "bold",
}));

// COPYRIGHT INFO
const COPYRIGHT_INFO = [
  { id: "copyright-info-1", text: "Configure Cookies", href: "/" },
  { id: "copyright-info-2", text: "Privacy Statement (PDF)", href: "/" },
  { id: "copyright-info-3", text: "Legal Documents and Notes", href: "/" },
  { id: "copyright-info-4", text: "Internet Security", href: "/" },
  { id: "copyright-info-5", text: "Accessibility", href: "/" },
];

// Function: Loading Copyright Info Handler
const loadingCopyRightInfoHandler = () => {
  return COPYRIGHT_INFO.map((INFO) => {
    return (
      <StyledCILink key={INFO.id} href={INFO.href}>
        <StyledCIText>{INFO.text}</StyledCIText>
      </StyledCILink>
    );
  });
};

// <Main Component>
const Copyright = () => {
  return (
    <StyledCopyrightWrapper>
      <StyledCopyrightText>
        Copyright © 1997 - 2023 CREDIT SUISSE. All rights reserved. IPv6
        available.
      </StyledCopyrightText>
      <StyledCIWrapper>{loadingCopyRightInfoHandler()}</StyledCIWrapper>
    </StyledCopyrightWrapper>
  );
};

export default Copyright;
