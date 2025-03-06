import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const FeatureCard = ({ icon, title, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      className="mb-4 text-center shadow-sm feature-card"
      style={{
        backgroundColor: hover ? "#007bff" : "#f8f9fa", // Blue on hover, light gray otherwise
        color: hover ? "#ffffff" : "#000000", // White text on hover, black otherwise
        transform: hover ? "scale(1.05)" : "scale(1)", // Scale effect
        transition: "all 0.3s ease-in-out", // Smooth transition
        cursor: "pointer", // Pointer cursor
        boxShadow: hover ? "0px 8px 20px rgba(0, 0, 0, 0.3)" : "0px 4px 10px rgba(0, 0, 0, 0.1)", // Shadow effect
        border: "none", // Remove default border
        borderRadius: "10px", // Rounded corners
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card.Body>
        <img
          src={icon}
          alt={title}
          className="mb-3"
          width={50}
          height={50}
          style={{
            transition: "transform 0.3s ease-in-out",
            transform: hover ? "rotate(10deg)" : "rotate(0deg)", // Slight icon rotation
            filter: hover ? "brightness(0) invert(1)" : "none", // Change icon color on hover
          }}
        />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeatureCard;
