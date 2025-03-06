import React from "react";
import { Container } from "react-bootstrap";

import "../styles/Hero1.css";

const Hero1 = () => {
  return (
    <div>
      
      {/* Welcome Section */}
      <section className="welcome-section">
        <Container className="text-center">
          <h1 className="welcome-title">Welcome to APSIL Tech Solutions</h1>
          <h3 className="welcome-subtitle">Your Partner in Innovation and Growth</h3>
          <p className="welcome-text">
            At <strong>APSIL Tech Solutions</strong>, we transform challenges into opportunities by providing tailored IT and business services.
            Our expertise empowers organizations to thrive in an ever-evolving landscape, delivering solutions that drive growth, 
            efficiency, and innovation.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default Hero1;
