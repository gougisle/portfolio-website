import React from "react";
import Hero from "../components/Hero";
import SectionNeonHeader from "../components/SectionNeonHeader";
import WelcomeMsg from "../components/WelcomeMessage";

export default function LandingView() {
  return (
    <>
      {/* <Hero /> */}
      <div className="welcome-message left-right-padding">
        <WelcomeMsg />
      </div>
    </>
  );
}
