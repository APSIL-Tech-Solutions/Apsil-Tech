// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>APSIL TECH SOLUTIONS</h3>
        <p>Innovating the Future, One Solution at a Time.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="social-icons">
          <a href="https://wa.me/9391446913" className="social-icon"><FaWhatsapp /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="https://www.instagram.com/apsil_tech_solutions/" className="social-icon"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/apsil-tech-solutions/?viewAsMember=true" className="social-icon"><FaLinkedin /></a>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2025 APSIL TECH SOLUTIONS. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
