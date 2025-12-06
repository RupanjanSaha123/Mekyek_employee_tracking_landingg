import React, { useState } from 'react';
import '../styles/App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon animate-glow">
            <i className="fas fa-users"></i>
          </span>
          <h1>Mekyek<span className="highlight"></span></h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features" className="nav-link">Features</a>
          <a href="#download" className="nav-link">About us</a>
          <a href="#pricing" className="nav-link">Connect</a>
          <a href="#contact" className="nav-link">Contact</a>
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