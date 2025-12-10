import React from "react";
import "../styles/App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <span className="logo-icon"></span>
              <h2>
                Mekyek
                <span className="highlight"></span>
              </h2>
            </div>
            <p className="footer-description">
              Connecting professionals, empowering careers, and fostering growth
              in the digital age.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Mekyek. All rights reserved.</p>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
