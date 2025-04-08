import React from "react";
import "./FeaturesGrid.css";

const FeaturesGrid = ({ advantages }) => {
  return (
    <div className="row adv-1-grid">
      {advantages.map((adv, index) => (
        <div key={index} className="col-md-4 adv-1-box">
          <img src={adv.icon} alt="" className="adv-1-icon" />
          <div>
            {adv.title && <h3>{adv.title}</h3>}
            <p>{adv.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
