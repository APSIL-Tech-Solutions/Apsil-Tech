// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // Custom CSS for styling
import not from '../assets/notfound.png'; // Corrected image import

const NotFound = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="error-button">Go to Homepage</Link>
      <img src={not} alt="404 error page not found illustration" />


    </div>
  );
};

export default NotFound;
