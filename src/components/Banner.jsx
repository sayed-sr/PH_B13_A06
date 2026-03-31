import React from "react";
import "./Banner.css";

const Banner = () => (
  <div className="banner-section">
    <div className="banner-container">
    
      <div className="banner-left-content">
        <span className="banner-badge">#1 AI Content Toolkit 2026</span>
        <h1 className="banner-title">

          Supercharge Your <br />
          <span className="banner-title-highlight">Digital Workflow</span>
        </h1>
                       <p className="banner-description">
          Create premium content, design stunning visuals, and automate your productivity with our suite of professional digital tools.
        </p>
        <div className="banner-buttons">

          <button className="banner-btn-primary">Explore Products</button>
          <button className="banner-btn-secondary">All Applications</button>
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