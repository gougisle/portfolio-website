import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <div id="footer-container">
      <div>Copyright © {getCurrentYear()} Lefeba Gougis.</div>
    </div>
  );
}
