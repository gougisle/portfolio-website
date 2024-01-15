import React from "react";
import "../styles/skillsection.scss";
import SingleSkillBox from "./SingleSkillBox";
import {
  faSquareJs,
  faHtml5,
  faCss3,
  faReact,
  faSass,
  faNodeJs,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

export default function SkillsSection() {
  const SKILLS = [
    { label: "JavaScript", icon: faSquareJs },
    { label: "HTML5", icon: faHtml5 },
    { label: "CSS3", icon: faCss3 },
    { label: "Sass", icon: faSass },
    { label: "React", icon: faReact },
    { label: "C#", icon: null },
    { label: "ASP.NET", icon: faMicrosoft },
    { label: "SQL", icon: faDatabase },
    { label: "Node.js", icon: faNodeJs },

    // "HTML",
    // "CSS",
    // "React",
    // "C#",
    // ".NET Core",
    // "SQL",
  ];

  const mapSkillBoxes = (skillObj) => {
    return (
      <SingleSkillBox
        key={"skill-" + skillObj.label}
        label={skillObj.label}
        icon={skillObj.icon}
      />
    );
  };

  return (
    <section id="skill-section">
      <div className="skill-section-content ">{SKILLS.map(mapSkillBoxes)}</div>
    </section>
  );
}
