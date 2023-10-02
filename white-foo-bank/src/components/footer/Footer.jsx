import { Box, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SiteAbout from "./about/SiteAbout";
import InfoList from "./info/InfoList";
import Copyright from "./copyright/Copyright";

// Styled Component
const FooterWrapper = styled(Box)(() => ({
  width: "100%",
  backgroundColor: "#070d13",
  padding: "5rem 0 0" /* 80px */,
  color: "white",
}));

const FooterGridContainer = styled(Grid)(() => ({
  maxWidth: 1200,
  paddingInline: "1.5rem" /* 24px */,
  margin: "0rem auto",
}));

const FooterGridItem = styled(Grid)(() => ({
  padding: "0 !important",
}));

const StyledItemLink = styled(Link)(() => ({
  ":hover .MuiTypography-root": {
    color: "#ee0979",
    paddingLeft: "5px",
  },
}));

const StyledItemText = styled(Typography)(() => ({
  color: "#e4e4e4",
  fontSize: "0.9375rem" /* 15px */,
  fontWeight: 300,
  transition: "all .5s ease",
}));

const StyledTextOnly = styled(Typography)(() => ({
  color: "#e4e4e4",
  fontSize: "0.9375rem" /* 15px */,
}));

const Footer = () => {
  // Intro Items
  const INTRO_ITEMS = [
    {
      id: 1,
      children: (
        <StyledItemLink href="/" underline="none">
          <StyledItemText>Về chúng tôi</StyledItemText>
        </StyledItemLink>
      ),
    },
    {
      id: 2,
      children: (
        <StyledItemLink href="/" underline="none">
          <StyledItemText>Dịch vụ</StyledItemText>
        </StyledItemLink>
      ),
    },

    {
      id: 3,
      children: (
        <StyledItemLink href="/" underline="none">
          <StyledItemText>Tính năng</StyledItemText>
        </StyledItemLink>
      ),
    },

    {
      id: 4,
      children: (
        <StyledItemLink href="/" underline="none">
          <StyledItemText>Bảng giá</StyledItemText>
        </StyledItemLink>
      ),
    },
  ];

  // Support Items
  const SUPPORT_ITEMS = [
    {
      id: 1,
      children: (
        <StyledItemLink href="/" underline="none">
          <StyledItemText>Câu hỏi thường gặp</StyledItemText>
        </StyledItemLink>
      ),
    },
    {
      id: 2,
      children: (
        <StyledItemLink href="/" underline="none">
          <StyledItemText>Chính sách bảo mật</StyledItemText>
        </StyledItemLink>
      ),
    },

    {
      id: 3,
      children: (
        <StyledItemLink href="/" underline="none">
          <StyledItemText>Điều khoản sử dụng</StyledItemText>
        </StyledItemLink>
      ),
    },

    {
      id: 4,
      children: (
        <StyledItemLink href="/" underline="none">
          <StyledItemText>Liên hệ</StyledItemText>
        </StyledItemLink>
      ),
    },
  ];

  // Contact Items
  const CONTACT_ITEMS = [
    {
      id: 1,
      children: (
        <StyledTextOnly>
          Địa chỉ:227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh
        </StyledTextOnly>
      ),
    },
    {
      id: 2,
      children: <StyledTextOnly>Email:admin@whitefoo.com</StyledTextOnly>,
    },

    {
      id: 3,
      children: <StyledTextOnly>Phone:(+84) 1234567890</StyledTextOnly>,
    },
  ];

  // <Main> Component
  return (
    <FooterWrapper>
      <FooterGridContainer container spacing={2}>
        <FooterGridItem item xs={3}>
          <SiteAbout />
        </FooterGridItem>
        <FooterGridItem
          item
          xs={3}
          sx={{
            "& .info-list-wrapper": {
              ":first-of-type": {
                paddingLeft: "3rem" /* 48px */,
              },
            },
          }}
        >
          <InfoList title="Giới Thiệu" items={INTRO_ITEMS} />
        </FooterGridItem>
        <FooterGridItem item xs={3}>
          <InfoList title="Hỗ Trợ" items={SUPPORT_ITEMS} />
        </FooterGridItem>
        <FooterGridItem item xs={3}>
          <InfoList title="Liên Hệ" items={CONTACT_ITEMS} />
        </FooterGridItem>
      </FooterGridContainer>
      <Copyright />
    </FooterWrapper>
  );
};

export default Footer;
