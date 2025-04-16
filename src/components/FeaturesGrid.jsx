import React from "react";
import "./FeaturesGrid.css";

const FeaturesGrid = ({ advantages }) => {
  return (
    <div className="grid grid-cols-1 md:gird-col-2 lg:grid-cols-3 gap-3 py-6">
      {advantages.map((adv, index) => (
        <div key={index} className="flex ">
          <img src={adv.icon} alt="" className="adv-1-icon" />
          <div>
            {adv.title && <h3 className="text-white">{adv.title}</h3>}
            <p className="text-[#B2B2B2]">{adv.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
