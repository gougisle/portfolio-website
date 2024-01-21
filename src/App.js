import React from "react";
import "./App.scss";
import PublicNavbar from "./components/PublicNavbar";
import Introduction from "./views/Introduction";
import ContactMeView from "./views/ContactMeView";
import Footer from "./components/Footer";
import Spacer from "./components/Spacer";
import Hero from "./components/Hero";
import AboutMeView from "./views/AboutMeView";
import ProjectsView from "./views/WorkExperience";

// TODO:
//  Convert into single page site
//  rather than route to different pages just scroll down
//  refactor the Hero part that it has finite borders

// Hero
// About
// Skills
// Projects
// ContactM

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
            <AboutMeView></AboutMeView>
            <Spacer />
            <ProjectsView></ProjectsView>
            <Spacer />
            <ContactMeView />
            <Footer />
          </div>
          <div className="col-1" />
        </div>
      </div>
    </div>
  );
}

export default App;
