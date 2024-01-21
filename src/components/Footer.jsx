import React from "react";

export default function Footer() {
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <div className="text-center my-5 py-3 fs-5">
      <div>Copyright © {getCurrentYear()} Lefeba Gougis</div>
    </div>
  );
}
