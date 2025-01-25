import React from 'react';
import '../styles/Portfolio.css'; // Link to CSS file for styling
import virtual from '../assets/virmo.png'
import stock from '../assets/stock.png'
// import saas from '../assets/saas.png'
import ecom from '../assets/e-com.png'
import aichat from '../assets/aichat.png'
import portfo from '../assets/portf.png'

function Portfolio() {
  const projects = [
    {
      title: 'Virtual Mouse',
      description: 'A computer vision project that allows users to control the cursor using hand gestures.',
      image: virtual,
      link: 'NotFound',
    },
    {
      title: 'Stock Market Prediction',
      description: 'A Python and Flask-based app that predicts stock trends using machine learning.',
      image: stock,
      link: 'http://sksalman.pythonanywhere.com/',
    },
    // {
    //   title: 'SaaS Platform',
    //   description: 'Custom SaaS solution to streamline workflows and increase efficiency for businesses.',
    //   image: saas,
    //   link: '#',
    // },
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce website with integrated payment gateway.',
      image: ecom,
      link: 'https://achyutveerendra.github.io/amazon-clone/',
    },
    {
      title: 'AI Chatbot',
      description: 'An AI-powered chatbot for customer support with natural language understanding.',
      image: aichat,
      link: 'NotFound',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React to showcase projects and skills.',
      image: portfo,
      link: 'https://nomula-achyut-veerendra.vercel.app/',
    },
  ];

  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Discover some of the exciting projects we’ve delivered for our clients.</p>
      </header>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-content">
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              <a href={project.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
