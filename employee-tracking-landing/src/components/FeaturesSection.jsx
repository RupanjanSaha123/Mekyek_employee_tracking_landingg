import React from 'react';
import '../styles/App.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'fas fa-chart-bar',
      title: "Real-time Analytics",
      description: "Live dashboards with team productivity metrics"
    },
    {
      icon: 'fas fa-shield-alt',
      title: "Privacy Focused",
      description: "GDPR compliant with end-to-end encryption"
    },
    {
      icon: 'fas fa-robot',
      title: "AI Insights",
      description: "Predictive analytics for workflow optimization"
    },
    {
      icon: 'fas fa-mobile-alt',
      title: "Cross-platform",
      description: "Seamless experience across all devices"
    },
    {
      icon: 'fas fa-bolt',
      title: "Fast Integration",
      description: "Connect with 50+ tools in minutes"
    },
    {
      icon: 'fas fa-users',
      title: "Team Collaboration",
      description: "Built-in chat and project management"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">Everything you need to manage your team effectively</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                <i className={`${feature.icon} fa-2x`}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;