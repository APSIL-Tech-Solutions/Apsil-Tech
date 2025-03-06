import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaWhatsapp, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../styles/CustomNavbar.css'; // Custom styling
import logo from '../assets/Apsil_logo.png'; // Import your logo

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false); // State for toggling menu

  return (
    <>
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="top-navbar-container">
          <div className="top-navbar-left">
            <a href="mailto:apsiltechsolutions@gmail.com" className="top-navbar-item">
              <FaEnvelope /> apsiltechsolutions@gmail.com
            </a>
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

      {/* Main Navbar */}
      <BootstrapNavbar expand="lg" className="bg-light sticky-navbar" expanded={expanded}>
        <Container>
          {/* Brand Logo */}
          <BootstrapNavbar.Brand as={Link} to="/" className="navbar-logo">
            <img src={logo} alt="Company Logo" className="logo-img" />
            APSIL Tech Solutions
          </BootstrapNavbar.Brand>

          {/* Hamburger Menu */}
          <BootstrapNavbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? <FaTimes /> : <FaBars />}
          </BootstrapNavbar.Toggle>

          {/* Navbar Links */}
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-links">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/web-development" onClick={() => setExpanded(false)}>Web Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/digital-marketing" onClick={() => setExpanded(false)}>Digital Marketing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ai-integrations" onClick={() => setExpanded(false)}>
  AI Integrations
</NavDropdown.Item>

<NavDropdown.Item as={Link} to="/saas" onClick={() => setExpanded(false)}>
  SaaS Solutions
</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/portfolio" onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/testimonials" onClick={() => setExpanded(false)}>Testimonials</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default CustomNavbar;
