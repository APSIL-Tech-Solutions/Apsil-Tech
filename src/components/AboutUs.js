import React from "react";
import "../styles/AboutUs.css";
// import ceo from "../assets/ceo.jpg";
// import co1 from "../assets/co1.png";
// import co2 from "../assets/co2.jpg";

function AboutUs() {
  return (
    <div className="about-us">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Us</h1>
        <p>We are a passionate team focused on providing exceptional service and quality.</p>
      </header>

      {/* Introduction Section */}
      <section className="about-introduction">
        <h2 className="section-title">Who We Are</h2>
        <p>
        We are a team of passionate students specializing in web development, digital marketing, and SaaS solutions for businesses of all sizes. Despite being students, we bring fresh ideas, innovation, and technical expertise to help our clients establish a strong online presence, enhance performance, and achieve long-term success. Our goal is to bridge the gap between technology and business growth by delivering impactful and cost-effective solutions.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2 className="section-title">Our Mission</h2>
        <p>
          Our mission is to deliver outstanding results using cutting-edge technology, creative problem-solving, and a customer-first approach.
          We aim to build lasting relationships with our clients and be their go-to digital partner.
        </p>
      </section>

      {/* Meet the Team */}
      {/* <section className="about-team">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-members">
          {[  
            { name: "Achyut Veerendra", role: "Founder & Developer", image: ceo },  
            { name: "Varun Sai", role: "Developer", image: co1 },  
            { name: "N.V. Harith", role: "Developer", image: co2 },  
          ].map((member, index) => (
            <div className="team-member" key={index}>
              <div className="team-card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="about-contact">
        <h2 className="section-title">Contact Us</h2>
        <p>If you have any questions or would like to work with us, feel free to reach out!</p>
        <a href="mailto:apsiltechsolutions@gmail.com" className="contact-link">apsiltechsolutions@gmail.com</a>
      </section>
    </div>
  );
}

export default AboutUs;
