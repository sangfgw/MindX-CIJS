import SiteHeader from "./components/header/SiteHeader";
import SectionWrapper from "./components/section/SectionWrapper";
import "./App.css";
import EventForm from "./components/section/EventForm/EventForm";

function App() {
  return (
    <>
      <SiteHeader />
      <SectionWrapper>
        <EventForm />
      </SectionWrapper>
    </>
  );
}

export default App;
