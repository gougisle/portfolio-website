import React, { useState } from "react";
import "../styles/contact.scss";
import { addNewContactToSheet } from "../services/portfolioServices";
import { Element } from "react-scroll";

export default function ContactMeView() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const onFormValueChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    addNewContactToSheet(formData);
  };

  return (
    <>
      <div className="container ">
        {/* TITLE */}
        <div className="d-flex flex-column align-items-center mb-2">
          <Element name="contact">
            <div className="view-main-header">
              Let's Connect<span class="neon-text">.</span>
            </div>
          </Element>

          <div className="contact-preface text-center">
            <p>
              If you would like to learn more about my professional experience,
              collaborate on a project, or just talk shop.
            </p>
            <p>
              Please feel free to contact me using the form below or send me an
              email to <span class="neon-text">lefebagougis@gmail.com</span>
            </p>
          </div>
        </div>
        {/* FORM */}
        <div className="d-flex justify-content-center">
          <form className="contact-form">
            <div className="row align-items-center">
              <div className="col-xs-12 ">
                <div className="mb-2">
                  {" "}
                  <label htmlFor="name">Name:</label>
                  <input
                    value={formData.Name}
                    onChange={onFormValueChange}
                    id="name"
                    name="Name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email">Email:</label>
                  <input
                    value={formData.Email}
                    onChange={onFormValueChange}
                    id="email"
                    name="Email"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  {" "}
                  <label htmlFor="message">Message:</label>
                  <textarea
                    value={formData.Message}
                    onChange={onFormValueChange}
                    id="message"
                    name="Message"
                    className="form-control"
                    rows={6}
                  />
                </div>

                {/* <div className="mb-2">
                  <label htmlFor="subject">Subject:</label>
                  <input id="subject" type="text" className="form-control" />
                </div> */}
              </div>
              {/* <div className="col-xs-12 col-sm-6"> </div> */}
            </div>
            <div className="row justify-content-center mt-3">
              <button
                onClick={handleContactFormSubmit}
                type="button"
                className="contact-button w-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
