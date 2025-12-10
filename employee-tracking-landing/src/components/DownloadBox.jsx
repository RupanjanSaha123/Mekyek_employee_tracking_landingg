import React, { useState } from "react";
import "../styles/App.css";

const DownloadBox = ({
  platform,
  version,
  requirements,
  downloadLink,
  features,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to get the appropriate Font Awesome icon class
  const getPlatformIconClass = () => {
    switch (platform) {
      case "MacOS":
        return "fab fa-apple";
      case "Windows":
        return "fab fa-windows";
      case "Linux":
        return "fab fa-linux";
      default:
        return "fas fa-desktop";
    }
  };

  return (
    <div
      className={`download-box animate-pop ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="box-header">
          <div className="platform-icon">
            <i className={`${getPlatformIconClass()} fa-lg`}></i>{" "}
            {/* Changed from fa-2x to fa-lg */}
          </div>
          <h3 className="platform-name">{platform}</h3>
          <span className="version-badge">{version}</span>
        </div>

        <div className="box-content">
          <p className="requirements">{requirements}</p>

          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <i className="fas fa-check checkmark"></i>
                {feature}
              </li>
            ))}
          </ul>

          <div className="download-options">
            <button className="download-btn primary">
              Download Installer
              <i className="fas fa-download download-icon"></i>
            </button>
            <button className="download-btn secondary">Get .zip Package</button>
          </div>

          <div className="additional-info">
            <p className="file-size">~150 MB installer</p>
            <p className="checksum">
              SHA256: <code>a1b2c3...f4e5d6</code>
            </p>
          </div>
        </div>

        <div className="box-footer">
          <a href="#" className="docs-link">
            View Installation Docs
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
  );
};

export default DownloadBox;
