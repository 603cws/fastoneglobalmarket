import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const TitleArea = ({ title, description, breadcrumbPaths }) => {
  return (
    <div className="pt-16 relative">
      <h2 className="text-xs md:text-base text-white">
        {breadcrumbPaths && (
          <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />
        )}
      </h2>
      {title && (
        <h1 className="mt-4 text-base md:text-xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4575FF] to-[#92AEFF]">
          {/* <h1 className="text-xl lg:text-3xl xl:text-5xl font-bold text-blue-400 mt-4"> */}
          {title}
        </h1>
      )}
      {description && (
        <p className="text-gray-300 mt-2 lg:mt-4 text-xs md:text-sm lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};
// const TitleArea = ({ title, description, breadcrumbPaths }) => {
//   return (
//     <div className="page-title-area">
//       <div className="container">
//         <div className="text-center">
//           {breadcrumbPaths && <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />}
//           {title && <h1>{title}</h1>}
//           {description && <p>{description}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

export default TitleArea;
