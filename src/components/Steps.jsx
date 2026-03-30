import React from "react";
import "./Steps.css";

const Steps = () => {
  const stepsData = [
    { id: '01', title: 'Create Account', icon: '/assets/user.png', desc: 'Sign up for free in seconds. No credit card required.' },
    { id: '02', title: 'Choose Products', icon: '/assets/package.png', desc: 'Browse our catalog and select tools that fit your needs.' },
    { id: '03', title: 'Start Creating', icon: '/assets/rocket.png', desc: 'Download and start using your tools immediately.' }
  ];

  return (
    <section className="steps-section">
      <div className="steps-container">
        <h2 className="steps-heading">Get Started In 3 Steps</h2>
        <p className="steps-subtitle">Start using premium digital tools in minutes, not hours.</p>
        <div className="steps-grid">
          {stepsData.map((step) => (
            <div key={step.id} className="step-card">
              <span className="step-number">{step.id}</span>
              <div className="step-icon-container">
                <img src={step.icon} className="step-icon" alt={step.title} />
              </div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;