import React from 'react';
import './OurPatient.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import patient from '../../img/patient.webp'

function OurPatient() {
  const testimonials = [
    {
      image: patient,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="our-patient-container">
      <h2 className="carousel-heading">What Our Patients Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="testimonial-image-container">
              <img src={testimonial.image} alt={`Patient ${index + 1}`} className="testimonial-image" />
            </div>
            <p className="testimonial-text">
              <FaQuoteLeft /> {testimonial.text} <FaQuoteRight />
            </p>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </div>
  );
}

export default OurPatient;
