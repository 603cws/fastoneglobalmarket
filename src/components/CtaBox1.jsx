import React from 'react';
import './CtaBox1.css';
const CtaBox = ({ heading, description, buttonText, buttonImage, sectionColor }) => {
  return (
    <section className={`ctabox-1 ${sectionColor}`}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-12">
            <h2 className="display-4">{heading}</h2>
            <p className="lead px-lg-12">{description}</p>
            <div className="d-grid justify-content-center">
              <a href="https://wa.me/+971521651531?text=Hello, I would like to chat with you!" className="btn-one rounded-btn white-btn" target="_blank" rel="noopener noreferrer">
                {buttonImage && <img src={buttonImage} alt="Chat Icon" className="imgbtn-2" />} 
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBox;
