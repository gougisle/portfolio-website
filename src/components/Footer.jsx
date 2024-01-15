import React from "react";
import "../styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <div id="footer-container">
      <p>
        Notice a <FontAwesomeIcon color="lightblue" icon={faBug} /> bug? Submit
        an issue here
      </p>
      <p>Copyright © {getCurrentYear()} Lefeba Gougis.</p>
    </div>
  );
}
