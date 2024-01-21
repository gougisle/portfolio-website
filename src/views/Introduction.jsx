import React from "react";
import image from "../assets/lefeba_headshot.png";

export default function Introduction() {
  const imageStyles = {
    width: "20rem",
    borderRadius: "50%",
    border: "5px solid white",
    borderColor: "white white grey grey",
  };
  return (
    <div className="container" style={{ height: "80vH" }}>
      <div className="row ">
        <div className="col text-center">
          <img src={image} alt="my face" style={imageStyles} />
        </div>
      </div>
      <div className="row m-2">
        <div className="col text-center p-3">
          <h1>
            <p>Hi, my name is Lefeba Gougis III</p>
            <p>
              <span className="neon-text">Full-Stack Developer</span>
            </p>{" "}
          </h1>
        </div>
      </div>
      <div></div>
    </div>
  );
}
