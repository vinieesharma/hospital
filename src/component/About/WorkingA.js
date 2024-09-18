import React from 'react';
import './WorkingA.css'; // Import the custom CSS
import Aerodown from '../svg/Aerodown'; // Import the Aerodown SVG component
import AerodUp from '../svg/AeroUp';
import one from '../../img/Image-9 (2).png'
import two from '../../img/filling-medical-history-1 (2).png'
import three from '../../img/successful-medical-team-2-2 (2).png'
 
function WorkingA() {
  // Sample data for each card
  const cardData = [
    {
      imageSrc: one,
      heading: 'Select Expert Doctor',
      text: 'Differentiated and experienced doctors are available in our extensive network for your choosing to cater for to your specific medical needs. ',
    },
    {
      imageSrc: two,
      heading: 'Make an Appointment',
      text: 'Book an appointment with our convenient app; you can choose any time that fits into your schedule including today’s consultations or whatever date. ',
    },
    {
      imageSrc: three,
      heading: 'Get Consultation',
      text: 'You will have a secure video chat from the comfort of your home with the selected doctor; it is possible for you to share symptoms, receive instant digital prescriptions and diagnoses. .',
    },
    {
      imageSrc: two,
      heading: 'Receive Care & Follow-Up ',
      text: 'Our platform provides medicine ordering services as well as home delivery options or nearby pharmacy pickups. You can also plan follow up appointments so as continuous care takes place.',
    },
  ];
 
  return (
    <div className="workingA-container">
      <span className="custom-span">How Does It Work?</span>
      <h2 className="custom-heading">Our Working Process</h2>
 
      <div className="card-container">
        {cardData.map((card, index) => (
          <React.Fragment key={index}>
            <div className="custom-card">
              <div className="card-image">
                <img src={card.imageSrc} alt={`Card ${index + 1}`} />
              </div>
              <h3 className="card-heading">{card.heading}</h3>
              <p className="card-text">{card.text}</p>
            </div>
            {/* Conditionally render Aerodown and AerodUp alternately based on screen size */}
            {index < cardData.length - 1 && (
              <>
                {/* Show arrows only on desktop screens */}
                <div className="arrow-container">
                  {index % 2 === 0 ? <Aerodown className="aerodown" /> : <AerodUp className="aeroup" />}
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
 
export default WorkingA;