import React from "react";
import "../styles/skillsection.scss";
import SingleSkillBox from "./SingleSkillBox";
import SectionNeonHeader from "./SectionNeonHeader";
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
    {
      label: "JavaScript",
      icon: faSquareJs,
      urlLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      label: "HTML5",
      icon: faHtml5,
      urlLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      label: "CSS3",
      icon: faCss3,
      urlLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { label: "React", icon: faReact, urlLink: "https://react.dev/" },
    {
      label: "C#",
      icon: null,
      urlLink:
        "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/",
    },
    {
      label: ".NET",
      icon: faMicrosoft,
      urlLink: "https://learn.microsoft.com/en-us/dotnet/",
    },
    {
      label: "Node.js",
      icon: faNodeJs,
      urlLink: "https://nodejs.org/docs/latest/api/",
    },
    {
      label: "SQL",
      icon: faDatabase,
      urlLink:
        "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16",
    },
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
    <div className="container">
      <SectionNeonHeader title={"Skills"}></SectionNeonHeader>
      <div className="row"></div>
      <section id="skill-section">{SKILLS.map(mapSkillBoxes)}</section>
    </div>
  );
}
