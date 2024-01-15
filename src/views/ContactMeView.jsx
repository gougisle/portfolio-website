import React from "react";
import "../styles/contact.scss";

export default function ContactMeView() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column align-items-center mb-3 mt-5">
          <div className="view-main-header">
            {" "}
            Let's Connect<span class="neon-text">.</span>
          </div>
          <div className="contact-preface">
            <p>
              If you would like to learn more about my professional experience,
              collaborate on a project, or just talk shop.
            </p>
            <p>
              Please feel free to contact me using the form below or send me an
              email at <span class="neon-text">lefebagougis@gmail.com</span>
            </p>
          </div>
        </div>
        {/* TITLE */}

        {/* FORM */}
        <div className="d-flex justify-content-center">
          <form action="submit" className="contact-form">
            <div className="row align-items-center">
              <div className="col-xs-12 col-sm-6 ">
                <div className="mb-2">
                  {" "}
                  <label htmlFor="name">Name:</label>
                  <input id="name" type="text" className="form-control" />
                </div>
                <div className="mb-2">
                  <label htmlFor="email">Email:</label>
                  <input id="email" type="text" className="form-control" />
                </div>

                <div className="mb-2">
                  <label htmlFor="subject">Subject:</label>
                  <input id="subject" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
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
      </div>
    </>
  );
}
