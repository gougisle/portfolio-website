import React, { useState } from "react";
import "../styles/contact.scss";
import { Alert } from "react-bootstrap";
import toastr from "toastr";
import { Element } from "react-scroll";

export default function ContactMeView() {
  const DEFAULT_FORM = { name: "", email: "", message: "" };

  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [error, setError] = useState(null);

  const handleSheetsPOSTResponse = (resp) => {
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-center",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "slideDown",
      hideMethod: "fadeOut",
    };
    setFormData(DEFAULT_FORM);
    if (resp.created) {
      toastr.success(
        "Thank you for submitting a message! I will respond as soon as I can.",
        "Message Sent!"
      );
    }
    if (resp.error) {
      toastr.error(
        "Unable to send your message at this time, please try again in a few minutes.",
        "Oops"
      );
    }
  };
  const onFormValueChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const addNewContactToSheet = async (contactData) => {
    await fetch(process.env.REACT_APP_SHEETS_DB_PRIVATE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [contactData],
      }),
    })
      .then((response) => response.json())
      .then(handleSheetsPOSTResponse);
  };
  const handleContactFormSubmit = (e) => {
    const isValid = validateForm(formData);

    e.preventDefault();
    if (isValid) {
      addNewContactToSheet(formData);
    }
  };

  const validateForm = (data) => {
    let isValid = true;
    let errorMsg = "";
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );

    //setError("");
    if (!data.message) {
      isValid = false;
      errorMsg = "Please provide a Message";
    }
    if (!emailRegex.test(data.email)) {
      isValid = false;
      errorMsg = "Invalid email";
    }
    if (!data.email) {
      isValid = false;
      errorMsg = "Please provide as Email";
    }

    if (!data.name) {
      isValid = false;
      errorMsg = "Please provide a Name";
    }

    setError(errorMsg);
    return isValid;
  };

  return (
    <>
      <div className="container ">
        {/* TITLE */}
        <div className="d-flex flex-column align-items-starta mb-2">
          <Element name="contact">
            <h1 className="view-main-header">
              Contact Me<span class="neon-text">.</span>
            </h1>
          </Element>

          <div className="contact-preface text-start fs-5">
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
        {/* FORM */}
        <div className="d-flex justify-content-center">
          <form className="contact-form">
            <div className="row align-items-center">
              <div className="col-xs-12 fs-5">
                <div className="text-center">
                  {error ? (
                    <Alert variant="danger" className="w-100">
                      {error}
                    </Alert>
                  ) : null}
                </div>

                <div className="mb-2">
                  {" "}
                  <label htmlFor="name">*Name:</label>
                  <input
                    value={formData.name}
                    onChange={onFormValueChange}
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email">*Email:</label>
                  <input
                    value={formData.email}
                    onChange={onFormValueChange}
                    id="email"
                    name="email"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  {" "}
                  <label htmlFor="message">*Message:</label>
                  <textarea
                    value={formData.message}
                    onChange={onFormValueChange}
                    id="message"
                    name="message"
                    className="form-control"
                    rows={6}
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <button
                onClick={handleContactFormSubmit}
                type="button"
                className="contact-button w-75 fs-5"
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
