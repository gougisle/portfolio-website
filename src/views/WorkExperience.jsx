import React from "react";
import { PROJECTS_ARR } from "../content/publicContent";
import { Element } from "react-scroll";

export default function ProjectsView() {
  const mapWorkExperience = (item, index) => {
    return (
      <section key={index} className="bg-dark border mb-4">
        <div className="p-3">
          {" "}
          <h2>{item.company}</h2>
          <p className="text-secondary">{item.title}</p>
          <p>{item.workDescription}</p>
          <p className="text-start">
            {" | "}
            {item.skills.map((s) => s + " | ")}
          </p>
        </div>
      </section>
    );
  };

  return (
    <>
      <div className="container">
        <Element name="experience">
          {" "}
          <h1 className="view-main-header">
            Work Experience<span className="neon-text">.</span>
          </h1>
          <div className="view-main-content">
            {PROJECTS_ARR.map(mapWorkExperience)}
          </div>
        </Element>
      </div>
    </>
  );
}
