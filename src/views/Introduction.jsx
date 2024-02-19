import React from "react";
import image from "../assets/lefeba_headshot.png";
import { Element } from "react-scroll";
import "../styles/introductionstyles.scss";

export default function Introduction() {
  const imageStyles = {
    width: "60%",
    borderRadius: "50%",
    border: "5px double white",
    borderColor: "white",
  };

  return (
    <div className="container">
      <div className="introduction-wrapper">
        <div className="row">
          <Element name="home">
            <div className="col text-center">
              <img src={image} alt="my face" style={imageStyles} />
            </div>
          </Element>
        </div>
        <div className="row m-2">
          <div className="text-center p-3 d-flex flex-column gap-2">
            {" "}
            <h1>
              <b>Lefeba Gougis III</b>
            </h1>
            <h3>{`<Full Stack Engineer/>`}</h3>
            <h5>
              I am interested in the relationship between humans and technology.
              My professional background includes Software Engineering,
              Behavioral Science, and Mindfulness. Ultimately I seek to combine
              my knowledge of software and psychology to create intuitive tools
              that help people thrive.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
