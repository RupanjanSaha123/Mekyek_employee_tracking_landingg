import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/connect.css';

const ConnectPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="connect-page">
      {/* Header spacing */}
      <div style={{ height: '80px' }}></div>

      {/* Hero Section */}
      <section className="connect-hero">
        <div className="container">
          <h1 className="connect-title">Get in Touch With Us</h1>
          <p className="connect-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="connect-section">
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={submitted}
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>

            {submitted && (
              <div className="success-message">
                <p>Thank you! We've received your message and will get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
