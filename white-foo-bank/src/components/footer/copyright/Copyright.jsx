import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CopyRightWrapper = styled(Box)(() => ({
  padding: "1.5625rem 1.25rem" /* 25px 20px */,
  textAlign: "center",
  marginTop: "3.125rem" /* 50px */,
  borderTop: "1px solid #192129",
}));

const CopyrightContent = styled(Typography)(() => ({
  fontSize: "1rem" /* 16px */,
  color: "#e4e4e4",
  marginBottom: "1rem" /* 16px */,
}));

const Copyright = () => {
  return (
    <CopyRightWrapper>
      <CopyrightContent>
        2020 WhiteFoo Corporation - Copyright lololol
      </CopyrightContent>
    </CopyRightWrapper>
  );
};

export default Copyright;
