import React from "react";
import "../styles/sectionneonheader.scss";

export default function SectionNeonHeader({ title }) {
  return (
    <div className="section-neon-header mt-5 mb-3 d-flex align-items-center gap-4">
      <div className="bar"></div>
      <span className="title">{title}</span>
    </div>
  );
}
