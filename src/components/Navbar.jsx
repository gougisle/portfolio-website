import React from "react";
import "../styles/navbarstyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const navToAbout = () => {
    navigate("/about");
  };

  const navToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <header className="header">
        <section className="header-title-section">
          <a id="site-name" href="/">
            lefebagougis<span className="neon-text">.</span>io
          </a>
          <a
            href="https://github.com/gougisle"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="ms-4 media-icon"
              icon={faGithub}
              size="lg"
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/lefebagougis3/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="ms-4 media-icon"
              icon={faLinkedin}
              size="lg"
            ></FontAwesomeIcon>
          </a>
        </section>
        <section className="header-nav-links">
          <a href="/about">About</a>
          <a href="/">Projects</a>
          <a href="/">References</a>
          <button className="contact-button" onClick={navToContact}>
            Contact Me
          </button>
        </section>
      </header>
    </>
  );
}
