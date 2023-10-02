import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";

const StyledBannerWrapper = styled(Stack)(() => ({
  flexDirection: "column",
  marginTop: "12rem" /* 192px */,
  marginBottom: "17rem" /* 272px */,
}));

const StyledTitle = styled(Typography)(() => ({
  fontSize: "3.25rem" /* 52px */,
  fontWeight: 700,
  lineHeight: 1.2,
  color: "#ffffff",
  width: 600,
  marginBottom: "1.25rem" /* 20px */,
}));

const StyledDescription = styled(Typography)(() => ({
  fontSize: "1.125rem" /* 52px */,
  color: "#ffffff",
  width: 400,
  marginBottom: "1.875rem" /* 30px */,
}));

const StyledButton = styled(Button)(() => ({
  color: "#ffffff",
  position: "relative",
  fontSize: "0.875rem",
  fontWeight: 700,
  width: "fit-content",
  padding: "0.9375rem 1.875rem" /* 15px 30px */,
  boxSizing: "border-box",
  lineHeight: "normal",

  "::before": {
    display: "block",
    content: '""',
    background: "linear-gradient(90deg,#ee0979,#ff6a00)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    borderRadius: "4px",
  },

  "::after": {
    display: "block",
    content: '""',
    background: "linear-gradient(135deg,#23bdb8,#43e794)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0,
    transition: "all .5s ease-in-out",
    borderRadius: "4px",
  },

  ":hover": {
    color: "#ffffff",

    "::after": {
      opacity: 1,
    },
  },
}));

const Banner = () => {
  return (
    <StyledBannerWrapper>
      <StyledTitle>Thanh toán không thể đơn giản hơn</StyledTitle>
      <StyledDescription>
        Hệ thống ngân hàng Internet hiện đại được tạo ra dành cho bạn.
      </StyledDescription>
      <StyledButton href="/" variant="text">
        Bắt Đầu
      </StyledButton>
    </StyledBannerWrapper>
  );
};

export default Banner;
