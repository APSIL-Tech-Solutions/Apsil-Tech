import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaDatabase, FaRobot, FaGraduationCap } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Services.css"; // Custom CSS for styling

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "We create responsive, fast, and SEO-friendly websites tailored to your needs.",
    bgColor: "linear-gradient(135deg, #4facfe, #00f2fe)"
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Developing user-friendly and feature-rich mobile applications for iOS and Android.",
    bgColor: "linear-gradient(135deg, #ff9a9e, #fad0c4)"
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    description: "Grow your brand with data-driven marketing strategies and social media campaigns.",
    bgColor: "linear-gradient(135deg, #ff758c, #ff7eb3)"
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "Secure and optimize your data with our comprehensive database solutions.",
    bgColor: "linear-gradient(135deg, #42e695, #3bb2b8)"
  },
  {
    icon: <FaRobot />,
    title: "AI & Machine Learning",
    description: "Leverage cutting-edge AI and ML models to automate processes and gain insights.",
    bgColor: "linear-gradient(135deg, #7f00ff, #e100ff)"
  },
  {
    icon: <FaGraduationCap />,
    title: "Final-Year Project Assistance",
    description: "Guiding students in AI, ML, and Full-Stack development for their final-year projects.",
    bgColor: "linear-gradient(135deg, #ffcc33, #ff6a00)"
  },
];

const Services = () => {
  return (
    <div className="services-section">
      {/* Hero Section */}
      <div className="hero-section text-center text-white py-5">
        <h1 className="fw-bold">🚀 Our Services</h1>
        <p className="lead">Empowering businesses with cutting-edge technology and innovation.</p>
      </div>

      <Container className="text-center py-5">
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="service-card h-100 shadow-lg" style={{ background: service.bgColor }}>
                <Card.Body className="text-center text-white">
                  <div className="service-icon">{service.icon}</div>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action Section */}
        <div className="cta-section mt-5 text-white text-center">
          <h2 className="fw-bold">🚀 Ready to Transform Your Business?</h2>
          <p>Contact us today to get started with our professional services.</p>
          <Button variant="light" size="lg" href="/contact">Contact Us</Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
