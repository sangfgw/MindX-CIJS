import { Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import LogoCap from "../../../assets/img/header/whitefoologocap.png";

// Styled Component
const AboutWrapper = styled(Stack)(() => ({
  flexDirection: "column",
  paddingInline: "0.9375rem" /* 15px */,
  marginBottom: "1.875rem" /* 30px */,
}));

const StyledLink = styled(Link)(() => ({
  width: "fit-content",
  marginBottom: "1.25rem" /* 20px */,
}));

const StyledImage = styled("img")(() => ({
  width: 150,
}));

const StyledContent = styled(Typography)(() => ({
  fontSize: "0.9375rem" /* 15px */,
  color: "white",
}));

// <Main Component>
const SiteAbout = () => {
  return (
    <AboutWrapper>
      <StyledLink href="/">
        <StyledImage src={LogoCap} alt="Logo Cap" />
      </StyledLink>

      <StyledContent>
        Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. Dẫn đầu trong danh sách
        các ngân hàng được người dùng bình chọn và được tin dùng bởi hàng triệu
        người dùng ở hầu hết các quốc gia trên thế giới.
      </StyledContent>
    </AboutWrapper>
  );
};

export default SiteAbout;
