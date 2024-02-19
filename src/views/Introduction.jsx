import React from "react";
import image from "../assets/linked_in_avatar.jpg";
import { Element } from "react-scroll";
import "../styles/introductionstyles.scss";

export default function Introduction() {
  return (
    <div className="container">
      <div className="introduction-wrapper">
        <div className="row">
          <Element name="home">
            <div className="col text-center">
              <img
                className="headshot-image"
                src={image}
                alt="Lefeba Gougis headshot"
              />
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
