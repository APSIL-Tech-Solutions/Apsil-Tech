import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Section = () => {
  return (
    <Container className="my-5 text-center">
      <Row className="align-items-center">
        <Col
          md={8}
          className="text-white p-4 mx-auto"
          style={{
            background: "linear-gradient(90deg, #005F7F, #007BFF)", // Fixed gradient
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // Added shadow for depth
          }}
        >
          <h2>Commitment You Can Trust!</h2>
          <blockquote className="fst-italic">
            Delivering Reliable Solutions With Integrity, Innovation, And Excellence You Can Count On.
          </blockquote>
          <Button variant="light" className="mt-3 text-primary fw-bold">CALL NOW!</Button>
        </Col>
      </Row>

      <Row className="my-4">
        <Col className="text-center">
          <h3 className="text-primary">Ready to Take the Next Step?</h3>
          <h1 className="text-dark fw-bold">Be A Part Of Our Growing Team And Build Your Dream Career.</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
