import React, { useState } from 'react';
import '../styles/App.css';

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConnect = () => {
    onNavigate('connect');
    setIsMenuOpen(false);
  };

  const handleHome = () => {
    onNavigate('home');
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <a href="#" onClick={(e) => { e.preventDefault(); handleHome(); }} className="logo-link">
            <span className="header-logo-text">Mekyek</span>
          </a>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features" className="nav-link" onClick={(e) => { e.preventDefault(); handleHome(); }}>Features</a>
          <a href="#download" className="nav-link" onClick={(e) => { e.preventDefault(); handleHome(); }}>About Us</a>
          <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handleConnect(); }}>Connect</a>
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