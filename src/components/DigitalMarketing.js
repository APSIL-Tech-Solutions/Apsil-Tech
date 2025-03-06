import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DigitalMarketing = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1>Digital Marketing Services</h1>
        <p>Boost your online presence with our expert digital marketing solutions.</p>
      </div>

      <Container className="my-5">
        {/* Services Section */}
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="g-4">
          {[
            { title: 'SEO Optimization', text: 'Improve your website ranking and attract more visitors.' },
            { title: 'Social Media Marketing', text: 'Engage with your audience on platforms like Instagram, Facebook, and LinkedIn.' },
            { title: 'Content Marketing', text: 'Create valuable content to drive traffic and conversions.' },
            { title: 'PPC Advertising', text: 'Run high-converting paid ad campaigns on Google and social media.' }
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

        {/* Marketing Tools */}
        <h2 className="text-center my-5">Marketing Tools We Use</h2>
        <Row className="text-center">
          {['Google Ads', 'Facebook Ads', 'SEO Tools', 'Email Marketing', 'Analytics', 'Automation'].map((tool, index) => (
            <Col md={4} key={index} className="mb-3">
              <Button variant="primary" className="w-100 py-2">{tool}</Button>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="bg-primary text-white text-center py-5">
        <h2>Want to Grow Your Business Online?</h2>
        <p>Contact us today for expert digital marketing solutions!</p>
        <Button variant="light" size="lg" href="/contact">Get Started</Button>
      </div>
    </>
  );
};

export default DigitalMarketing;
