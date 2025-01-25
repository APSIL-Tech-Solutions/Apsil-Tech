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

    // Replace the placeholders with your actual EmailJS service details
    emailjs
      .send(
        'service_1f543r7', // Replace with your Service ID
        'template_kn99xgl', // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'mz4KZNqeu9YRU8n0P' // Replace with your Public Key
      )
      .then(
        () => {
          setResponseMessage('Your message has been sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
        },
        (error) => {
          setResponseMessage('Error sending the message. Please try again.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Please fill out the form below!</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
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
              placeholder="Your Email"
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
              placeholder="Your Phone Number"
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
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-button">Submit</button>
        </form>

        {responseMessage && <p className="success-message">{responseMessage}</p>}
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>If you have any questions, feel free to reach out to us via email or phone.</p>
        <p>Email: <a href="mailto:apsiltechsolutions@gmail.com">apsiltechsolutions@gmail.com</a></p>
        <p>Phone: <a href="tel:+91-9391446913">+91 9391446913</a></p>
      </div>
    </div>
  );
}

export default Contact;
