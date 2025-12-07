import React, { useState } from 'react';
import '../styles/App.css';

const HeroSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

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
          
          {/* Stats with reduced gap */}
          <div className="hero-stats">
            <div 
              className={`stat stat-1 ${hoveredStat === 0 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredStat(0)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="stat-content">
                <h3>50K+</h3>
                <p>Active Users</p>
              </div>
              <div className="stat-glow"></div>
            </div>
            <div 
              className={`stat stat-2 ${hoveredStat === 1 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredStat(1)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="stat-content">
                <h3>99.9%</h3>
                <p>Uptime</p>
              </div>
              <div className="stat-glow"></div>
            </div>
            <div 
              className={`stat stat-3 ${hoveredStat === 2 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredStat(2)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="stat-content">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
              <div className="stat-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;