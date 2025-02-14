import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaWhatsapp, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import logo from '../assets/Apsil_logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="top-navbar">
        <div className="top-navbar-container">
          <div className="top-navbar-left">
            <a href="mailto:apsiltechsolutions@gmail.com" className="top-navbar-item">
              <FaEnvelope /> apsiltechsolutions@gmail.com</a>
            <a href="tel:9391446913" className="top-navbar-item">
              <FaPhoneAlt /> 9391446913
            </a>
          </div>
          <div className="top-navbar-right">
            <a href="https://www.instagram.com/apsil_tech_solutions/" className="top-navbar-item" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/9391446913" className="top-navbar-item" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/company/apsil-tech-solutions/?viewAsMember=true" className="top-navbar-item" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </nav>

      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img src={logo} alt="Company Logo" className="logo-img" />
          </a>
          <div className="hamburger-menu" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
