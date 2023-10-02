import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled Components
const StyledWrapper = styled(Stack)(() => ({
  flexDirection: "column",
  margin: "1rem 0" /* 16px */,
  width: "66.66666667%",
  marginInline: "auto",
}));

const StyledTag = styled(Typography)(() => ({
  fontSize: "2rem" /* 32px */,
  marginBottom: "1.875rem" /* 30px */,
}));

const StyledTitle = styled(Typography)(() => ({
  fontSize: "1.375rem" /* 24px */,
  marginBottom: "0.9375rem" /* 15px */,
}));

const StyledContent = styled(Typography)(() => ({
  fontSize: "1rem" /* 16px */,
}));

// <Main Component>
const About = () => {
  return (
    <StyledWrapper>
      <StyledTag>About Credit Suisse</StyledTag>
      <StyledTitle>
        We build lasting value by serving our clients with care and
        entrepreneurial spirit.
      </StyledTitle>
      <StyledContent>
        The Credit Suisse Group purpose is at the core of everything we do. It
        underpins the value we create and has powered our progress for more than
        160 years. It captures the essence of &rsquo;why&rsquo; we exist as an
        organization. It motivates us when we come to work every day and serves
        as our North Star when we make decisions. Ultimately, it serves to
        define who we are and what we should be doing for our employees, clients
        and stakeholders.
      </StyledContent>
    </StyledWrapper>
  );
};

export default About;
