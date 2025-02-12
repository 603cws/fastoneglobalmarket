import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="row cf-bg">
          <div className="col-md-6 contact-img-bg">
            <img src="/images/tp/contact-img.png" alt="" />
          </div>
          <div className="col-md-6">
          <form>
        <h4 className="mb-5 cf-title">Contact Form</h4>
          <div className="row mb-3">
            <div className="col-md-6">
              <label for="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="col-md-6">
              <label for="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="col-md-6">
              <label for="contact" className="form-label">
                Contact
              </label>
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
