import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
// Skills to display: JS, React, CS, HTML, SQL(database), C#, .NETCore
// FontAwesome: JS, react, html, css, database
// need an icon: C#, .NetCore

export default function SingleSkillBox({ label, icon }) {
  const htmlCentering = { paddingLeft: "4px" };

  return (
    <div className="skill-box-container">
      <div className="skill-box-icon">
        <FontAwesomeIcon
          icon={icon !== null ? icon : faCodepen}
          size="2xl"
          style={label === "HTML5" && htmlCentering}
        ></FontAwesomeIcon>
      </div>
      <div className="skill-box-label">{label}</div>
    </div>
  );
}
