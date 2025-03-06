import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ngImage from '../assets/ng.png';

const Section = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img src={ngImage} alt="Two people at a desk" className="img-fluid" />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2 className="text-center">Innovating the Future of Business</h2>
          <p className="text-center">Driving Growth With Tailored Solutions And Expertise</p>
          <p>
            At APSIL TECH SOLUTIONS, we specialize in empowering businesses with cutting-edge IT and business solutions designed for success in today’s fast-paced world. Our focus on innovation, efficiency, and personalized service ensures we deliver results that exceed expectations. From Business Intelligence and data analytics to cloud services and staffing solutions, we offer a wide range of services to streamline your operations and drive growth. Backed by a team of experienced professionals, we create custom strategies that align with your business goals.
          </p>
          
          {/* ✅ Centering the button */}
          <div className="text-center">
            <Link to="/about">
              <Button variant="primary">MORE ABOUT US</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
