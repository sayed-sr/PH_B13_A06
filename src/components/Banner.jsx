import React from "react";
import "./Banner.css";

const Banner = () => (
  <div className="banner-section">
    <div className="banner-container">
    
      <div className="banner-left-content">
        <span className="banner-badge"><img src="assets/dot.png" alt="" /> New: AI-Powered Tools Available</span>
        <h1 className="banner-title">

          Supercharge Your <br />
          <span className="banner-title-highlight">Digital Workflow</span>
        </h1>
                       <p className="banner-description">
       Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
        </p>
        <div className="banner-buttons">

          <button className="banner-btn-primary">Explore Products</button>
          <button className="banner-btn-secondary"><img src="assets/Play.png" alt="" />Watch Demo</button>
        </div>
      </div>

      


      <div className="banner-right-content">
        <img 
          src="/assets/banner.png" 
          alt="Hero Banner" 

          className="banner-image" 
        />
      </div>
    </div>
    
  </div>
);

export default Banner;