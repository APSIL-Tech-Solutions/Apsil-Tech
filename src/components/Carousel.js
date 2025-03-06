import React from "react";
import { Carousel as BootstrapCarousel, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import cs1 from "../assets/cs1.png";
import cs2 from "../assets/cs2.png";
import cs3 from "../assets/cs3.png";
import "../styles/Carousel.css";

const CustomCarousel = () => {
  return (
    <BootstrapCarousel fade interval={3000}>
      {/* Slide 1 */}
      <BootstrapCarousel.Item>
        <img className="d-block w-100 hero-img" src={cs1} alt="Slide 1" />
        <BootstrapCarousel.Caption className="hero-overlay">
          <Container>
            <h1 className="hero-title">Empowering Digital Transformation</h1>
            <p className="hero-text">
              We provide cutting-edge Web Development, AI Solutions, and Digital Marketing.
            </p>
            <Button as={Link} to="/contact" variant="primary" size="lg">Get Started</Button>
          </Container>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>

      {/* Slide 2 */}
      <BootstrapCarousel.Item>
        <img className="d-block w-100 hero-img" src={cs2} alt="Slide 2" />
        <BootstrapCarousel.Caption className="hero-overlay">
          <Container>
            <h1 className="hero-title">AI-Powered Innovations</h1>
            <p className="hero-text">
              Unlock the power of AI to optimize your business with advanced automation.
            </p>
            <Button as={Link} to="/ai-solutions" variant="primary" size="lg">Explore AI Solutions</Button>
          </Container>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>

      {/* Slide 3 */}
      <BootstrapCarousel.Item>
        <img className="d-block w-100 hero-img" src={cs3} alt="Slide 3" />
        <BootstrapCarousel.Caption className="hero-overlay">
          <Container>
            <h1 className="hero-title">Transform Your Online Presence</h1>
            <p className="hero-text">
              Elevate your brand with our expert Web Development and Digital Marketing services.
            </p>
            <Button as={Link} to="/contact" variant="primary" size="lg">Contact Us</Button>
          </Container>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

export default CustomCarousel;
