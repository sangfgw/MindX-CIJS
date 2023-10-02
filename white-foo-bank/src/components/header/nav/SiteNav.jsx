import { AppBar, Link, Stack, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

import LogoHead from "../../../assets/img/header/whitefoologohead.png";
import LogoCap from "../../../assets/img/header/whitefoologocap.png";

const StyledNav = styled(AppBar)(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.25rem 0" /* 20px */,
  backgroundColor: "transparent",
  boxShadow: "none",
  paddingInline: "0.9375rem" /* 15px */,
}));

const StyledToolbar = styled(Toolbar)(() => ({
  flex: 1,
  minHeight: "46px !important",
  paddingInline: "0 !important",
}));

const StyledLogoLink = styled(Link)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  paddingTop: "0.3125rem" /* 5px */,
}));

const StyledLogo = styled("img")(() => ({
  height: 25,
}));

const StyledNavLinkGroup = styled(Stack)(() => ({
  marginLeft: "auto",
  flexDirection: "row",
  alignItems: "center",
  gap: 30,
}));

const StyledNavLink = styled(Link)(() => ({
  color: "#ffffff",
  fontSize: "1.0625rem" /* 17px */,
  transition: "all .5s ease",
  textDecoration: "none",

  ":hover": {
    color: "#ee0979",
  },
}));

const SiteNav = () => {
  // Site Nav Links
  const SITE_NAV_LINKS = [
    { id: 1, href: "/", title: "Trang chủ" },
    { id: 2, href: "/", title: "Thông tin" },
    { id: 3, href: "/", title: "Hỏi đáp" },
    { id: 4, href: "/", title: "Liên hệ" },
    { id: 5, href: "/", title: "Thành viên" },
  ];

  // Function: loading site nav handler
  const loadingSiteNavHandler = () => {
    return SITE_NAV_LINKS.map((link) => {
      return (
        <StyledNavLink key={link.id} href={link.href}>
          {link.title}
        </StyledNavLink>
      );
    });
  };

  return (
    <StyledNav position="static">
      <StyledToolbar>
        <StyledLogoLink href="/">
          <StyledLogo src={LogoHead} alt="Logo Head" />
          <StyledLogo src={LogoCap} alt="Logo Cap" />
        </StyledLogoLink>

        <StyledNavLinkGroup>{loadingSiteNavHandler()}</StyledNavLinkGroup>
      </StyledToolbar>
    </StyledNav>
  );
};

export default SiteNav;
