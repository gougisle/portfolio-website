import React from "react";
import SectionNeonHeader from "./SectionNeonHeader";
import "../styles/welcomemessage.scss";

export default function WelcomeMessage() {
  return (
    <>
      <div className="welcome-message-section">
        <SectionNeonHeader title={"Welcome, friend!"} />
        <div className="fs-2">
          <p>
            This site is intended to be a repository for{" "}
            <span className="neon-text">all the things</span> I find worth
            sharing in my life. Typically, this means projects and content about{" "}
            <span className="neon-text">
              engineering, gaming, and meditation
            </span>
            ; however, occasionally I like to spice things up and explore topics
            that fall outside these bounds.
          </p>{" "}
          <p>
            If you have any questions or just want to chat, don't hesitate to
            <span className="neon-text"> reach out</span>.
          </p>
        </div>
      </div>
    </>
  );
}
