import React from "react";
import SectionNeonHeader from "../components/SectionNeonHeader";
import SkillsSection from "../components/SkillsSection";
import { Element } from "react-scroll";

export default function AboutMeView() {
  return (
    <>
      {" "}
      <div className="container">
        <Element name="about">
          {" "}
          <h1 className="view-main-header">
            About Me<span className="neon-text">.</span>
          </h1>
          <div className="view-main-content">
            {" "}
            <div className="about-me-intro">
              My professional background includes Software Engineering,
              Behavioral Science, and Mindfulness. I am interested in the
              complex relationship between humans and technology. Ultimately I
              seek to combine my knowledge of software and psychology to create
              intuitive tools that help people thrive. In my free time I enjoy
              making music, exploring nature and gaming.
            </div>
            <div className="about-me-professional">
              {" "}
              <SectionNeonHeader title={"Early Career"} />
              <p>
                After graduating from UC Santa Barbara in 2018, I began work as
                a Research Fellow with the{" "}
                <a
                  href="https://www.cmhp.ucsb.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Center For Mindfulness and Human Potential (CMHP)
                </a>
                . Here I a played a critial role in the development and
                maintanance of a Minfulness Education App –{" "}
                <a
                  href="https://www.findingfocus.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Finding Focus.
                </a>{" "}
                My contributions to this project included QA testing,
                video/audio production and research design. This is where my
                interets in software develpment was sparked.
              </p>
              <p>
                Following my fellowship with the CMHP, I split my time between
                working as a Behavioral Therapist and a Junior Developer Intern.
                As a Behavioral Therapist, I learned invaluable lessons about
                human compassion, trauma and mental illness. And as a developer
                I learned to solved complex, software problems through
                experimentation, testing and collaboration.
              </p>
              <p>Then COVID happened...</p>
              <p>
                Amidst the challenges posed by the COVID-19 pandemic, I used the
                opportunity to further me skills as a software developer. After
                just a few months of diligent studying I started my first
                full-time as a Full Stack Developer with World Prints -- a small
                T-shirt printing company based out of Los Angeles. Here I gained
                a wealth of knowledge about database design, backend
                development, frontend UI/UX design, product management and much
                more.
              </p>
            </div>
            <div className="about-me-skills">
              <SkillsSection></SkillsSection>
            </div>
          </div>
        </Element>
      </div>
    </>
  );
}
