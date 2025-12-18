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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email using Resend API
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_RESEND_API_KEY || 'your_resend_api_key_here'}`
        },
        body: JSON.stringify({
          from: 'Acme <onboarding@resend.dev>', // You can change this to your domain
          to: ['info@mekyek.com'], // Owner's email
          reply_to: formData.email, // So owner can reply directly to user
          subject: `New Contact Form Message from ${formData.name}`,
          html: `
            <h3>New Message from Contact Form</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Sent from your website contact form</small></p>
          `,
          text: `
            New Message from Contact Form
            
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
            
            ---
            Sent from your website contact form
          `
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      const data = await response.json();
      console.log('Email sent successfully:', data);
      
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      
    } catch (err) {
      console.error('Error sending email:', err);
      setError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                ></textarea>
              </div>

              {error && (
                <div className="error-message">
                  <p>{error}</p>
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading || submitted}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : submitted ? (
                  'Message Sent! ✓'
                ) : (
                  'Send Message'
                )}
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