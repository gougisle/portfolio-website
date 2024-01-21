import React from "react";
import "../styles/skillsection.scss";
import SingleSkillBox from "./SingleSkillBox";
import SectionNeonHeader from "./SectionNeonHeader";
import { SKILLS_ARR } from "../content/publicContent";

export default function SkillsSection() {
  const mapSkillBoxes = (skillObj) => {
    return (
      <SingleSkillBox
        key={"skill-" + skillObj.label}
        label={skillObj.label}
        icon={skillObj.icon}
        link={skillObj.urlLink}
      />
    );
  };

  return (
    <div className="container">
      <SectionNeonHeader title={"Skills"}></SectionNeonHeader>
      <div className="row"></div>
      <section id="skill-section">{SKILLS_ARR.map(mapSkillBoxes)}</section>
    </div>
  );
}
