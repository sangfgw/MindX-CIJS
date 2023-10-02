import { Link, Stack } from "@mui/material";
import { styled } from "@mui/system";
import CreditSuisseImage from "/site/credit-suisse.svg";
import Facebook from "../../../assets/social-media/Facebook";
import Twitter from "../../../assets/social-media/Twitter";
import Youtube from "../../../assets/social-media/Youtube";
import Linkedin from "../../../assets/social-media/Linkedin";
import Instagram from "../../../assets/social-media/Instagram";

// Styled Component
const SocialMediaList = styled(Stack)(() => ({
  display: "inline-flex",
  flexDirection: "row",
  gap: "30px",
  margin: "3.125rem 0" /* 50px */,
}));

const StyledMediaLink = styled(Link)(() => ({
  "& svg": {
    fill: "white",
  },
}));

const StyledLogoImage = styled("img")(() => ({
  filter:
    "invert(99%) sepia(1%) saturate(0) hue-rotate(67deg) brightness(112%) contrast(100%)",
  width: 194,
  height: 44,
  marginInlineStart: "auto",
}));

// Links
const LINKS = [
  { id: "link-twitter", item: <Twitter />, href: "/" },
  { id: "link-facebook", item: <Facebook />, href: "/" },
  { id: "link-youtube", item: <Youtube />, href: "/" },
  { id: "link-linkedin", item: <Linkedin />, href: "/" },
  { id: "link-instagram", item: <Instagram />, href: "/" },
];

// Function: loading media links handler
const loadingMediaLinksHandler = () => {
  return LINKS.map((LINK) => {
    return (
      <StyledMediaLink href={LINK.href} key={LINK.id}>
        {LINK.item}
      </StyledMediaLink>
    );
  });
};

// <Main Component>
const SocialMedia = () => {
  return (
    <Stack direction="row" alignItems="center">
      <SocialMediaList>{loadingMediaLinksHandler()}</SocialMediaList>
      <StyledLogoImage src={CreditSuisseImage} alt="Credit Suisse Logo" />
    </Stack>
  );
};

export default SocialMedia;
