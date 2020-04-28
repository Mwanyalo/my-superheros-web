import React from "react";
import "./Loader.scss";

const Loader = () => (
  <div className="loader">
    <div className="animation-container">
      <div className="boom-container">
        <h3>Loading...</h3>
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
    </div>
  </div>
);

export default Loader;
