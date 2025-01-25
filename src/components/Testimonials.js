import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Innovations',
      feedback: 'The team delivered an exceptional product on time. Their professionalism and dedication were outstanding.',
      image: 'https://via.placeholder.com/100?text=John',
    },
    {
      name: 'Jane Smith',
      role: 'Founder, Startup Solutions',
      feedback: 'Their AI-powered solutions boosted our efficiency by 30%. Highly recommended!',
      image: 'https://via.placeholder.com/100?text=Jane',
    },
    {
      name: 'Robert Brown',
      role: 'CTO, Future Enterprises',
      feedback: 'A pleasure to work with! Their SaaS platform transformed the way we manage our operations.',
      image: 'https://via.placeholder.com/100?text=Robert',
    },
    {
      name: 'Emily Johnson',
      role: 'Marketing Head, Brand Boosters',
      feedback: 'Their digital marketing strategies significantly increased our online presence and revenue.',
      image: 'https://via.placeholder.com/100?text=Emily',
    },
  ];

  return (
    <div className="testimonials">
      <header className="testimonials-header">
        <h1>What Our Clients Say</h1>
        <p>Hear from our satisfied clients and their success stories.</p>
      </header>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
