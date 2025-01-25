import React from 'react';
import '../styles/Services.css'; // Link to CSS file for styling
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaDatabase, FaRobot } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'We create responsive, fast, and SEO-friendly websites tailored to your needs.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Developing user-friendly and feature-rich mobile applications for iOS and Android.',
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      description: 'Grow your brand with data-driven marketing strategies and social media campaigns.',
    },
    // {
    //   icon: <FaCloud />,
    //   title: 'SaaS Solutions',
    //   description: 'Custom SaaS platforms to streamline your business processes and boost efficiency.',
    // },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'Secure and optimize your data with our comprehensive database solutions.',
    },
    {
      icon: <FaRobot />,
      title: 'AI & Machine Learning',
      description: 'Leverage cutting-edge AI and ML models to automate processes and gain insights.',
    },
  ];

  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Explore the wide range of services we offer to help your business grow.</p>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <section className="services-cta">
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact us today to get started with our professional services.</p>
        <a href="Contact" className="cta-button">Contact Us</a>
      </section>
    </div>
  );
}

export default Services;
