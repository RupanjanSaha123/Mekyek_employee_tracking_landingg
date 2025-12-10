import React, { useState } from "react";
import "../styles/App.css";
import Particles from "./Particles";

const HeroSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <>
      <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          zIndex: 0,
          pointerEvents: "none",
          display: "flex"
        }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.8)",
          zIndex: 1,
          pointerEvents: "none"
        }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-content">
            <h2 className="hero-title animate-float">
              Modern Employee Tracking
              <br />
              Solution
            </h2>
            <p className="hero-subtitle">
              Monitor productivity, track attendance, and optimize workflows
              with our AI-powered employee tracking software. Used by 10,000+
              companies worldwide.
            </p>

            {/* Stats with reduced gap */}
            <div className="hero-stats">
              <div
                className={`stat stat-1 ${hoveredStat === 0 ? "hovered" : ""}`}
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
                className={`stat stat-2 ${hoveredStat === 1 ? "hovered" : ""}`}
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
                className={`stat stat-3 ${hoveredStat === 2 ? "hovered" : ""}`}
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
    </>
  );
};

export default HeroSection;
