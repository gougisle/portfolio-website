import React from "react";
import "../styles/navbarstyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

export default function PublicNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary public-navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            lefebagougis<span className="neon-text">.</span>io
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
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="justify-content-end gap-2"
              style={{ width: "100%" }}
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                offset={-80}
              >
                About
              </Link>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="nav-link"
                offset={-80}
              >
                Experience
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <button className="contact-button">Contact Me</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
