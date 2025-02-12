import React from "react";
import "./TitleBgCenter.css"; // Assuming you are creating a separate CSS file for styles

const TitleBgCta = ({
  title,
  description,
  backgroundImage,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div
      className={`page-title-area title-bg-cta ${
        backgroundImage ? "with-bg" : ""
      }`}
      
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {title && <h1>{title}</h1>}
            {description && <p>{description}</p>}
            {buttonText && buttonUrl && (
              <a href={buttonUrl} className="btn btn-one btn-primary">
                {buttonText}
              </a>
            )}
          </div>
          <div className="col-md-6">
            <img src={backgroundImage} alt="" className="cta-img-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBgCta;
