import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DownloadBox from './components/DownloadBox';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import LightRays from './components/LightRays';
import ConnectPage from './components/ConnectPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app dark-theme">
      <Header onNavigate={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <HeroSection />
          <div className="download-section">
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#565757ff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <h2 className="section-title">Download for Your Platform</h2>
        <p className="section-subtitle">Track your team seamlessly on any operating system</p>
        <div className="download-boxes">
          <DownloadBox 
            platform="MacOS" 
            version="v2.1.0"
            requirements="macOS 10.14+"
            downloadLink="#"
            features={["Native M1/M2 Support", "iCloud Sync", "Touch Bar Controls"]}
          />
          <DownloadBox 
            platform="Windows"  
            version="v2.1.0"
            requirements="Windows 10+"
            downloadLink="#"
            features={["Windows Hello Integration", "Active Directory Sync", "Dark Mode"]}
          />
          <DownloadBox 
            platform="Linux"  
            version="v2.1.0"
            requirements="Ubuntu 20.04+, Fedora 33+"
            downloadLink="#"
            features={["CLI Support", "Docker Integration", "Systemd Service"]}
          />
        </div>
      </div>
      <FeaturesSection />
      <Footer />
        </>
      ) : (
        <>
          <ConnectPage />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;