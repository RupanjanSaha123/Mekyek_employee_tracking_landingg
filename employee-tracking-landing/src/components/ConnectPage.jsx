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
      console.log('Sending email with data:', formData); // Debug log

      // Send email using Brevo (Sendinblue) API
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': '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'
        },
        body: JSON.stringify({
          sender: {
            name: 'Mekyek Contact Form',
            email: 'mekyek.tech@gmail.com'
          },
          to: [
            {
              email: 'mekyek.tech@gmail.com', // Changed to your Gmail
              name: 'Mekyek'
            }
          ],
          replyTo: {
            email: formData.email,
            name: formData.name
          },
          subject: `New Contact Form Message from ${formData.name}`,
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">New Message from Contact Form</h2>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong style="color: #374151;">Name:</strong> ${formData.name}</p>
                <p><strong style="color: #374151;">Email:</strong> ${formData.email}</p>
              </div>
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <p><strong style="color: #374151;">Message:</strong></p>
                <p style="line-height: 1.6; color: #4b5563;">${formData.message.replace(/\n/g, '<br>')}</p>
              </div>
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; text-align: center;">Sent from your website contact form</p>
            </div>
          `,
          textContent: `
New Message from Contact Form

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from your website contact form
          `
        })
      });

      const data = await response.json();
      console.log('Response status:', response.status); // Debug log
      console.log('Response data:', data); // Debug log

      if (!response.ok) {
        throw new Error(data.message || data.code || 'Failed to send message');
      }

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