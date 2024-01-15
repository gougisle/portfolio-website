import React, { Suspense } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import WelcomeMsg from "./components/WelcomeMessage";
import MyStory from "./components/MyStory";
import AboutMeView from "./views/AboutMeView";

import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const LandingView = React.lazy(() => import("./views/LandingView"));
const ContactMeView = React.lazy(() => import("./views/ContactMeView"));

function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <div>
        <Router>
          <Suspense fallback={"Loading"}>
            {/* <Navbar />{" "} */}
            <Routes>
              <Route exact path="/" Component={LandingView} />
              <Route exact path="/contact" Component={ContactMeView} />
              <Route exact path="/about" Component={AboutMeView} />
            </Routes>
          </Suspense>
        </Router>{" "}
        {/* <MyStory />
   
        <SkillsSection />
    
      */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
