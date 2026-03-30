import React from "react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2 className="cta-title">
          Ready To Transform Your Workflow?
        </h2>
        <p className="cta-description">
          Join thousands of professionals already using DigiTools to supercharge their productivity.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Explore Products</button>
          <button className="btn-secondary">View Pricing</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;