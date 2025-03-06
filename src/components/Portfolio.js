import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Portfolio.css";
import virtual from "../assets/virmo.png";
import stock from "../assets/stock.png";
import ecom from "../assets/e-com.png";
import aichat from "../assets/aichat.png";
import portfo from "../assets/portf.png";

const projects = [
  {
    title: "Virtual Mouse",
    description: "Control your cursor with hand gestures using computer vision.",
    image: virtual,
    link: "https://github.com/achyutveerendra/Virtual_Mouse",
  },
  {
    title: "Stock Market Prediction",
    description: "Predict stock trends using ML with a Python & Flask-based app.",
    image: stock,
    link: "http://sksalman.pythonanywhere.com/",
  },
  {
    title: "E-Commerce Website",
    description: "A fully functional e-commerce platform with payment integration.",
    image: ecom,
    link: "https://achyutveerendra.github.io/amazon-clone/",
  },
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot with NLP capabilities for customer support.",
    image: aichat,
    link: "https://github.com/achyutveerendra/Resume-ATS",
  },
  {
    title: "Portfolio Website",
    description: "A React-powered personal portfolio showcasing skills & projects.",
    image: portfo,
    link: "https://nomula-achyut-veerendra.vercel.app/",
  },
];

function Portfolio() {
  return (
    <Container className="portfolio-container text-center py-5">
      <h1 className="section-title text-gradient">🚀 My Portfolio</h1>
      <p className="section-subtitle text-muted">
        Explore some of my featured projects that showcase my skills!
      </p>

      <Row className="justify-content-center g-4">
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={index} className="d-flex align-items-stretch fade-in">
            <Card className="portfolio-card shadow-lg h-100">
              <div className="image-container">
                <Card.Img variant="top" src={project.image} className="portfolio-image" />
              </div>
              <Card.Body className="portfolio-content d-flex flex-column">
                <Card.Title className="portfolio-title fw-bold">{project.title}</Card.Title>
                <Card.Text className="portfolio-description">{project.description}</Card.Text>
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-btn"
                  >
                    View Project <FaExternalLinkAlt />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
