// In HeroSection.jsx
import React from 'react';
import '../styles/App.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title animate-float">
            Modern Employee <span className="highlight">Tracking</span> Solution
          </h2>
          <p className="hero-subtitle">
            Monitor productivity, track attendance, and optimize workflows with our 
            AI-powered employee tracking software. Used by 10,000+ companies worldwide.
          </p>
          
          <div className="hero-stats">
            <div className="stat stat-orb" data-color="purple">
              <div className="orb-glow"></div>
              <h3>50K+</h3>
              <p>Active Users</p>
              <div className="particles"></div>
            </div>
            <div className="stat stat-orb" data-color="pink">
              <div className="orb-glow"></div>
              <h3>99.9%</h3>
              <p>Uptime</p>
              <div className="particles"></div>
            </div>
            <div className="stat stat-orb" data-color="blue">
              <div className="orb-glow"></div>
              <h3>24/7</h3>
              <p>Support</p>
              <div className="particles"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;