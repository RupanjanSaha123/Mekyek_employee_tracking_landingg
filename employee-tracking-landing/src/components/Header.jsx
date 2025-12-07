import React, { useState } from 'react';
import '../styles/App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <a href="/" className="logo-link">
            <img 
              src="/mekyek_logo_dark.png" 
              alt="Mekyek Logo" 
              className="header-logo"
            />
          </a>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features" className="nav-link">Features</a>
          <a href="#download" className="nav-link">About Us</a>
          <a href="#pricing" className="nav-link">Connect</a>
          <button className="login-btn">Download</button>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;