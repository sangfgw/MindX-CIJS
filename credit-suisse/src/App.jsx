import Footer from "./components/footer-cpn/Footer";
import Header from "./components/header-cpn/Header";
import SiteNotification from "./components/notification/SiteNotification";
import SectionWrapper from "./components/section-cpn/SectionWrapper";
import SiteBanner from "./components/section-cpn/banner/SiteBanner";
import SectionDiscover from "./components/section-cpn/discover/SectionDiscover";
import SectionExpertise from "./components/section-cpn/expertise/SectionExpertise";
import SectionLinks from "./components/section-cpn/links/SectionLinks";

function App() {
  return (
    <>
      <Header />
      <SiteNotification />
      <SectionWrapper>
        <SiteBanner />
        <SectionLinks />
        <SectionDiscover />
        <SectionExpertise />
      </SectionWrapper>
      <Footer />
    </>
  );
}

export default App;
