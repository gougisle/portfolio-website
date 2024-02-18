import React from "react";
import "./App.scss";
import PublicNavbar from "./components/PublicNavbar";
import Introduction from "./views/Introduction";
import ContactMe from "./views/ContactMe";
import Footer from "./components/Footer";
import Spacer from "./components/Spacer";

import AboutMe from "./views/AboutMe";
import WorkExperience from "./views/WorkExperience";

function App() {
  return (
    <div className="App">
      {/* <Background /> */}
      <PublicNavbar></PublicNavbar>
      <div className="main">
        <div className="bg-body">
          {" "}
          <div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>{" "}
        </div>
        <Introduction />
        <AboutMe />
        <Spacer />
        <WorkExperience />
        <Spacer />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
