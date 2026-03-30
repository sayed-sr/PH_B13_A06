import React from "react";
import "./Stats.css";

const Stats = () => (
  <section className="stats-section">
    <div className="stat-item">
      <h3 className="stat-value">50K+</h3>
      <p className="stat-label">Active Users</p>
    </div>

    <div className="stat-item stat-divider">
      <h3 className="stat-value">200+</h3>
      <p className="stat-label">Premium Tools</p>
    </div>

    <div className="stat-item">
      <h3 className="stat-value">4.9</h3>
      <p className="stat-label">Rating</p>
    </div>
  </section>
);

export default Stats;