import React from "react";
import "../styles/App.css";

const Footer = () => {
  /* NOTE: The link URLs (hrefs) and the structure are correct.
    If the icons (fab fa-twitter, fas fa-phone, etc.) are NOT showing, 
    you MUST ensure the Font Awesome CSS link is added to the <head> 
    of your public/index.html file (e.g., using a CDN link for Font Awesome 6).
  */
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
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <a href="mailto:info@mekyek.com" className="contact-link">
                  <i className="fas fa-envelope"></i> info@mekyek.com
                </a>
              </li>
              <li>
                <a href="tel:+918335974309" className="contact-link">
                  <i className="fas fa-phone"></i> +91 8335974309
                </a>
              </li>
              <li className="contact-address">
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Premises 6TH Floor, ECOSPACE BUSINESS PARK, AA II, Newtown,
                  Kolkata, Chakpachuria, West Bengal 700156
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Mekyek. All rights reserved.</p>

          <div className="social-links">
            <a
              href="https://twitter.com/mekyek"
              className="social-icon"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/mekyek"
              className="social-icon"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/mekyek"
              className="social-icon"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/mekyek"
              className="social-icon"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/mekyek"
              className="social-icon"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;