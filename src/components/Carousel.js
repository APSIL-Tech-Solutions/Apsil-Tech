import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap'; // Rename the import
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import cs1 from '../assets/cs1.png'
import cs2 from '../assets/cs2.png'
import cs3 from '../assets/cs3.png'
import '../styles/Carousel.css'
function CustomCarousel() {
  return (
    <div>
      <BootstrapCarousel>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src={cs1} // Replace with your actual image path
            alt="Los Angeles"
          />
        
        </BootstrapCarousel.Item>
        
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src={cs2} // Replace with your actual image path
            alt="Chicago"
          />
          {/* <BootstrapCarousel.Caption>
            <h3>Chicago</h3>
            <p>City of Winds</p>
          </BootstrapCarousel.Caption> */}
        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src={cs3} // Replace with your actual image path
            alt="New York"
          />
          {/* <BootstrapCarousel.Caption>
            <h3>New York</h3>
            <p>The Big Apple</p>
          </BootstrapCarousel.Caption> */}
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
    </div>
  );
}

export default CustomCarousel;
