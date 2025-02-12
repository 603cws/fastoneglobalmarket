import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const TitleArea = ({ title, description, breadcrumbPaths }) => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="text-center">
          {breadcrumbPaths && <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />}
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default TitleArea;
