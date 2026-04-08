import React from "react";
import "./Banner.css";

const Banner = ({ title = "Shop", path = [] }) => {
  return (
    <div className="banner">
      {/* Background dots */}
      <div className="banner-dots top"></div>
      <div className="banner-dots bottom"></div>

      <div className="banner-container">
        {/* Heading */}
        <h1 className="banner-title">{title}</h1>

        {/* Breadcrumb */}
        <div className="banner-path">
          {path.map((item, index) => (
            <span key={index}>
              {item}
              {index !== path.length - 1 && " / "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
