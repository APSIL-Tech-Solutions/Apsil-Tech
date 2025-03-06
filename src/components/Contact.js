import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_1f543r7',
        'template_kn99xgl',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'mz4KZNqeu9YRU8n0P'
      )
      .then(
        () => {
          setResponseMessage('✅ Your message has been sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          setResponseMessage('❌ Error sending the message. Please try again.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>📩 Get in Touch</h1>
        <p>We’d love to hear from you! Fill out the form below to connect with us.</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Your Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-button">🚀 Send Message</button>
        </form>

        {responseMessage && <p className="success-message">{responseMessage}</p>}
      </div>

      <div className="contact-info">
        <h3>📞 Contact Information</h3>
        <p>Feel free to reach out via email or phone.</p>
        <p>Email: <a href="mailto:apsiltechsolutions@gmail.com">apsiltechsolutions@gmail.com</a></p>
        <p>Phone: <a href="tel:+91-9391446913">+91 9391446913</a></p>
      </div>
    </div>
  );
}

export default Contact;
