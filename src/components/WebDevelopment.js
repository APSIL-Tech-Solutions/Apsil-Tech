import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const WebDevelopment = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1>Web Development Services</h1>
        <p>We build fast, scalable, and modern websites to grow your business.</p>
      </div>

      <Container className="my-5">
        {/* Services Section */}
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="b-4">
          {[
            { title: 'Custom Website Development', text: 'We craft unique and responsive websites tailored to your business needs.' },
            { title: 'E-Commerce Solutions', text: 'We build powerful online stores with seamless payment integration.' },
            { title: 'Full-Stack Development', text: 'From front-end UI/UX to backend databases, we handle complete development.' },
            { title: 'SEO & Performance Optimization', text: 'We ensure your site ranks high and loads at lightning speed.' }
          ].map((service, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="shadow-lg h-100">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Technologies Used */}
        <h2 className="text-center my-5">Technologies We Use</h2>
        <Row className="text-center">
          {['React.js', 'Next.js', 'Node.js', 'Spring Boot', 'MySQL', 'MongoDB', 'WordPress'].map((tech, index) => (
            <Col md={3} key={index} className="mb-3">
              <Button variant="primary" className="w-100 py-2">{tech}</Button>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="bg-primary text-white text-center py-5">
        <h2>Ready to Build Your Website?</h2>
        <p>Contact us today and let's create something amazing together!</p>
        <Button variant="light" size="lg" href="/contact">Get in Touch</Button>
      </div>
    </>
  );
};

export default WebDevelopment;
