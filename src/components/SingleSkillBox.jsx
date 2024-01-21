import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

export default function SingleSkillBox({ label, icon, link }) {
  const htmlCentering = { paddingLeft: "4px" };
  console.log("lnk: ", link);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className="skill-box">
        <div className="skill-box-icon">
          <FontAwesomeIcon
            icon={icon !== null ? icon : faCodepen}
            size="2xl"
            style={label === "HTML5" && htmlCentering}
          ></FontAwesomeIcon>
        </div>{" "}
        <div className="skill-box-label">{label}</div>
      </div>
    </a>
  );
}
