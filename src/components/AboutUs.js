import React from 'react';
import '../styles/AboutUs.css'; // Link to a separate CSS file for styling
import ceo from '../assets/ceo.jpg'
import co1 from '../assets/co1.png'
import co2 from '../assets/co2.jpg'


function AboutUs() {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>We are a passionate team focused on providing exceptional service and quality.</p>
      </header>

      <section className="about-introduction">
        <div className="section-title">
          <h2>Who We Are</h2>
        </div>
        <p>
          We are a dedicated team that specializes in web development, digital marketing, and SaaS solutions for businesses of all sizes. Our mission is to help our clients enhance their online presence, improve their performance, and achieve long-term success.
        </p>
      </section>

      <section className="about-mission">
        <div className="section-title">
          <h2>Our Mission</h2>
        </div>
        <p>
          Our mission is to deliver outstanding results through a combination of cutting-edge technology, creative problem-solving, and a customer-first approach. We aim to build lasting relationships with our clients and become their go-to partner for all their digital needs.
        </p>
      </section>

      <section className="about-team">
        <div className="section-title">
          <h2>Meet Our Team</h2>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src={ceo} alt="Team Member" />
            <h3>Achyut Veerendra</h3>
            <p>Developer</p>
          </div>
          <div className="team-member">
            <img src={co1} alt="Team Member" />
            <h3>Varun Sai</h3>
            <p>Developer</p>
          </div>
          <div className="team-member">
            <img src={co2} alt="Team Member" />
            <h3>N.V.Harith</h3>
            <p>Developer</p>
          </div>
        </div>
      </section>
{/* 
      <section className="about-contact">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
        <p>If you have any questions or would like to work with us, feel free to reach out!</p>
        <a href="mailto:apsiltechsolutions@gmail.com" className="contact-link">apsiltechsolutions@gmail.com</a>
      </section> */}
    </div>
  );
}

export default AboutUs;
