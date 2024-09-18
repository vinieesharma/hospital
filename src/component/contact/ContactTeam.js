import React from 'react';
import './ContactTeam.css';

// Replace these with actual image paths
import doctor1 from '../../img/doctor1.jpg';
import doctor2 from '../../img/doctor2.png';

function ContactTeam() {
  return (
    <div className="contact-team-container">
      <h1 className="heading">Meet Our Teams</h1>
      <div className="cards-container">
        <div className="card">
          <img src={doctor1} alt="Doctor 1" className="card-image" />
          <div className="card-content">
            <h2 className="doctor-name">Dr. John Doe</h2>
          </div>
        </div>
        <div className="card">
          <img src={doctor2} alt="Doctor 2" className="card-image" />
          <div className="card-content">
            <h2 className="doctor-name">Dr. Jane Smith</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTeam;

