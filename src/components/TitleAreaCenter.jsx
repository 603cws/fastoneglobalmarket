import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const TitleAreaCenter = ({ title, description, breadcrumbPaths }) => {
  return (
    <div className="title-area-center">
      <div className="container">
        <div className="pta-width">
        {breadcrumbPaths && <Breadcrumbs paths={breadcrumbPaths} currentTitle="Pricing Model" />}
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default TitleAreaCenter;
