import React, { useState } from 'react';
import './HomeServices.css';
import cardiologyImg from '../../img/cardiology.jpg';
import pulmologyImg from '../../img/pulmology.jpeg';
import neurologyImg from '../../img/Neurology.jpeg';
import ophthalmologyImg from '../../img/Opthamology.jpeg';
import urologyImg from '../../img/Urology.jpg';
import dermatologyImg from '../../img/Dermatology.jpeg';

const services = [
  { icon: '🤍', name: 'Cardiology', image: cardiologyImg, description: 'Cardiology is the study and treatment of disorders of the heart and blood vessels.' },
  { icon: '🫁', name: 'Pulmology', image: pulmologyImg, description: 'Pulmology focuses on the respiratory system, including the lungs and airways.' },
  { icon: '🧠', name: 'Neurology', image: neurologyImg, description: 'Neurology deals with disorders of the nervous system, including the brain.' },
  { icon: '👀', name: 'Opthamology', image: ophthalmologyImg, description: 'Ophthalmology is the branch of medicine dealing with the eyes.' },
  { icon: '🧬', name: 'Urology', image: urologyImg, description: 'Urology is the medical specialty concerned with diseases of the urinary tract.' },
  { icon: '👨‍⚕️', name: 'Dermatology', image: dermatologyImg, description: 'Dermatology focuses on conditions of the skin, hair, and nails.' },
];

const HomeService = () => {
  // Set the default selected service to the first service in the array
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="home-service-container">
      <h1 className="home-service-title">Our Services</h1>
      <div className="home-service-list">
        {services.map((service) => (
          <div
            key={service.name}
            className={`home-service-item ${selectedService?.name === service.name ? 'home-service-active' : ''}`}
            onClick={() => handleServiceClick(service)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service)}
          >
            <span className="home-service-icon">{service.icon}</span><br/>
            <span className="home-service-name">{service.name}</span>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="home-service-details">
          <h2>{selectedService.name} Details</h2>
          <div className="home-details-content">
            <div className="home-details-left">
              <p>{selectedService.description}</p>
              <button className="home-service-button">Learn More</button>
            </div>
            <div className="home-details-right">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="home-service-image"
                onError={(e) => e.target.src = 'path/to/fallback-image.jpg'} // Fallback image handling
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeService;
