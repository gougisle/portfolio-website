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
            <div className="about-me-professional fs-5">
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
                . Here I played a critical role in the development and
                maintenance of a Minfulness Education App –{" "}
                <a
                  href="https://www.findingfocus.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Finding Focus
                </a>
                . This is where my interest in software development was sparked.
              </p>
              <p>
                Following my fellowship with the CMHP, I split my time between
                working as a Behavioral Therapist and a Junior Developer Intern.
                As a therapist, I learned invaluable lessons about human
                compassion, trauma and mental illness. And as a developer, I
                learned to solve complex, software problems through
                experimentation, testing and collaboration.
              </p>
              <p>Then COVID happened...</p>
              <p>
                Amidst the challenges posed by the COVID-19 pandemic, I decided
                to expand my skills as a software developer. After just a few
                months of diligent studying, I started my first full-time
                position as a Full Stack Developer with World Prints -- a small
                T-shirt printing company based out of Los Angeles. Here I
                acquired expertise in database design, backend development,
                frontend UI/UX design and a plethora of other valuable skills.
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
