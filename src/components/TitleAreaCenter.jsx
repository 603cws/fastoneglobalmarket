import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const TitleAreaCenter = ({ title, description, breadcrumbPaths }) => {
  return (
    <div className={`title-area-center`}>
      <div className="container">
        <div className="pta-width">
          {breadcrumbPaths && (
            <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />
          )}
          <div className="py-16 space-y-5">
            {title && (
              <h1 className="text-7xl uppercase font-bold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                {title}
              </h1>
            )}
            {description && <p className="text-white">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className={`title-area-center bg-${bgColor}`}>
  //     <div className="container">
  //       <div className="pta-width">
  //         {breadcrumbPaths && (
  //           <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />
  //         )}
  //         {title && <h1 className={`${titleSize} ${fontColor}`}>{title}</h1>}
  //         {description && <p>{description}</p>}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default TitleAreaCenter;
