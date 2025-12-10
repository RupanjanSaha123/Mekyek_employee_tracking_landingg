import React, { useState } from 'react'; // 💡 Import useState
import '../styles/App.css';

const FeaturesSection = () => {
    // 💡 1. State to track cursor position (default to center)
    const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const target = e.currentTarget;
        // Get the bounding box of the section element
        const rect = target.getBoundingClientRect();

        // Calculate cursor position relative to the section (in percentages)
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setCursorPos({ x, y });

        // Set CSS Variables directly on the element for CSS to use
        target.style.setProperty('--mouse-x', `${x}%`);
        target.style.setProperty('--mouse-y', `${y}%`);
    };

    const features = [
        // ... (Your features array remains the same)
        { icon: 'fas fa-chart-bar', title: "Real-time Analytics", description: "Live dashboards with team productivity metrics" },
        { icon: 'fas fa-shield-alt', title: "Privacy Focused", description: "GDPR compliant with end-to-end encryption" },
        { icon: 'fas fa-robot', title: "AI Insights", description: "Predictive analytics for workflow optimization" },
        { icon: 'fas fa-mobile-alt', title: "Cross-platform", description: "Seamless experience across all devices" },
        { icon: 'fas fa-bolt', title: "Fast Integration", description: "Connect with 50+ tools in minutes" },
        { icon: 'fas fa-users', title: "Team Collaboration", description: "Built-in chat and project management" }
    ];

    return (
        // 💡 2. Add the onMouseMove handler to the main section
        <section 
            className="features hover-gradient-section" // Renamed class for clarity
            id="features"
            onMouseMove={handleMouseMove}
        >
            {/* 💡 3. The background effect is now entirely managed by CSS */}
            
            <div className="content-overlay">
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
            </div>
        </section>
    );
};

export default FeaturesSection;