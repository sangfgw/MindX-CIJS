import { Box, Container } from "@mui/material";
import SiteNav from "./components/header/nav/SiteNav";
import { styled } from "@mui/system";
import SiteBanner from "./assets/img/site/site-banner.jpg";
import Banner from "./components/section/banner/Banner";
import SectionWrapper from "./components/section/SectionWrapper";
import Expertise from "./components/section/expertise/Expertise";
import Footer from "./components/footer/Footer";
import * as React from "react";

const StyledContainer = styled(Container)(() => ({
  width: 1200,
  position: "relative",
}));

const StyledBanner = styled(Box)(() => ({
  "::before": {
    display: "block",
    position: "absolute",
    content: '""',
    top: 0,
    left: "calc((((100vw - 1200px) / 2) + 15px) * -1)",
    right: "calc((((100vw - 1200px) / 2) + 15px) * -1)",
    bottom: 0,
    backgroundImage: `url(${SiteBanner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: -9999,
  },
}));

const App = () => {
  return (
    <React.Fragment>
      <StyledContainer>
        <Box sx={{ position: "relative" }}>
          <StyledBanner>
            <SiteNav />

            <SectionWrapper>
              <Banner />
            </SectionWrapper>
          </StyledBanner>
        </Box>

        <Expertise />
      </StyledContainer>
      <Footer />
    </React.Fragment>
  );
};

export default App;
