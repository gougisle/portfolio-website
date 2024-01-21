import React from "react";
import "./App.scss";
import PublicNavbar from "./components/PublicNavbar";
import Introduction from "./views/Introduction";
import ContactMe from "./views/ContactMe";
import Footer from "./components/Footer";
import Spacer from "./components/Spacer";
import Hero from "./components/Background";
import AboutMe from "./views/AboutMe";
import WorkExperience from "./views/WorkExperience";

//TODO:
// add text limit to the experience boxes, with "see more"
// add description to CMPH experience box
//

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="main">
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%" }}>
          <PublicNavbar></PublicNavbar>
        </div>
        <div className="container" style={{ marginTop: 200 }}>
          <div className="col-1" />
          <div className="col">
            <Introduction></Introduction>
            <AboutMe></AboutMe>
            <Spacer />
            <WorkExperience></WorkExperience>
            <Spacer />
            <ContactMe />
            <Footer />
          </div>
          <div className="col-1" />
        </div>
      </div>
    </div>
  );
}

export default App;
