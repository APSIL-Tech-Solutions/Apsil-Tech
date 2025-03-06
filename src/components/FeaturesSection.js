import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeatureCard from './FeatureCard'; // ✅ Import FeatureCard
import 'bootstrap/dist/css/bootstrap.min.css';

// Import icons correctly
import icon1 from '../assets/work-experience.png';
import icon2 from '../assets/solution.png';
import icon3 from '../assets/voice-recording.png';
import icon4 from '../assets/management.png';
import icon5 from '../assets/quality-assurance.png';
import icon6 from '../assets/analytics.png';

const FeaturesSection = () => {
  const features = [
    { icon: icon1, title: 'Experienced Professionals', description: 'Leverage expertise that ensures excellence in every solution.' },
    { icon: icon2, title: 'Customized Solutions', description: 'Tailored strategies to meet your unique business needs.' },
    { icon: icon3, title: 'Proven Track Record', description: 'A history of delivering results you can rely on for every project.' },
    { icon: icon4, title: 'Cost-Effective Services', description: 'Cost-effective solutions with exceptional ROI and reliability.' },
    { icon: icon5, title: 'Unmatched Excellence', description: 'Commitment to quality, efficiency, and excellence in service delivery.' },
    { icon: icon6, title: 'Insightful Decisions', description: 'Specialization in Business Intelligence (BI) and data analytics to drive informed decisions.' },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Why Choose Us?</h2>
      <Row>
        {features.map((feature, index) => (
          <Col sm={12} md={6} lg={4} key={index}>
            <FeatureCard {...feature} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturesSection;
