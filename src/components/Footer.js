// src/components/Footer.js
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <h3>APSIL TECH SOLUTIONS</h3>
      <p>&copy; 2025 All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/portfolio">Portfolio</a>
      </div>
    </div>
  );
};

export default Footer;
