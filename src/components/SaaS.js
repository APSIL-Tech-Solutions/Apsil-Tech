import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SaaS = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <h1>SaaS Development Solutions</h1>
        <p>Transform your business with powerful cloud-based software solutions.</p>
      </div>

      <Container className="my-5">
        {/* Services Section */}
        <h2 className="text-center mb-4">Our SaaS Offerings</h2>
        <Row className="g-4">
          {[
            { title: 'Custom SaaS Development', text: 'Build scalable and secure SaaS applications tailored to your business needs.' },
            { title: 'Multi-Tenant Architecture', text: 'Design and deploy multi-tenant cloud platforms for seamless user experiences.' },
            { title: 'API & Microservices', text: 'Integrate AI-powered APIs and microservices for enhanced functionality.' },
            { title: 'Cloud Migration', text: 'Migrate existing applications to the cloud for better performance and security.' }
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

        {/* SaaS Technologies */}
        <h2 className="text-center my-5">Technologies We Use</h2>
        <Row className="text-center">
          {['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Node.js', 'React', 'GraphQL'].map((tech, index) => (
            <Col md={4} key={index} className="mb-3">
              <Button variant="dark" className="w-100 py-2">{tech}</Button>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="bg-dark text-white text-center py-5">
        <h2>Want to Build a SaaS Product?</h2>
        <p>Let’s create an innovative, cloud-based solution for your business!</p>
        <Button variant="light" size="lg" href="/contact">Get Started</Button>
      </div>
    </>
  );
};

export default SaaS;
