import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AIIntegrations = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <h1>AI Integration Services</h1>
        <p>Enhance your business with AI-powered automation and intelligence.</p>
      </div>

      <Container className="my-5">
        {/* Services Section */}
        <h2 className="text-center mb-4">Our AI Services</h2>
        <Row className="g-4">
          {[
            { title: 'AI Chatbots', text: 'Deploy AI-powered chatbots for customer support and engagement.' },
            { title: 'Predictive Analytics', text: 'Leverage AI to forecast trends and improve decision-making.' },
            { title: 'Image & Speech Recognition', text: 'Implement AI-driven vision and voice processing systems.' },
            { title: 'Process Automation', text: 'Automate repetitive business tasks with AI-powered solutions.' }
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

        {/* AI Technologies */}
        <h2 className="text-center my-5">AI Technologies We Use</h2>
        <Row className="text-center">
          {['Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'TensorFlow', 'OpenAI'].map((tech, index) => (
            <Col md={4} key={index} className="mb-3">
              <Button variant="dark" className="w-100 py-2">{tech}</Button>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="bg-dark text-white text-center py-5">
        <h2>Ready to Integrate AI into Your Business?</h2>
        <p>Contact us today and explore AI-driven innovations!</p>
        <Button variant="light" size="lg" href="/contact">Get Started</Button>
      </div>
    </>
  );
};

export default AIIntegrations;
