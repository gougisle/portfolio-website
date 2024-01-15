import React from "react";
import "../styles/contactstyles.scss";

export default function ContactMe() {
  return (
    <>
      <div className="contact-form-preface text-center fs-4">
        <p>
          If you would like to learn more about my professional experience,
          collaborate on a project, or just talk shop.
        </p>
        <p>
          Please feel free to contact me using the form below or send me an
          email to lefebagougis@gmail.com
        </p>
      </div>
      <div>
        <form action="submit" className="contact-form">
          <div className="row align-items-center">
            <div className="col form-section-1">
              <div className="input-field">
                {" "}
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" className="form-control" />
              </div>
              <div className="input-field">
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" className="form-control" />
              </div>

              <div className="input-field">
                <label htmlFor="subject">Subject:</label>
                <input id="subject" type="text" className="form-control" />
              </div>
            </div>
            <div className="col form-section-2">
              {" "}
              <label htmlFor="message">Message:</label>
              <textarea id="message" className="form-control" rows={6} />
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <button type="button" className=" contact-button w-50">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
