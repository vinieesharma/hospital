import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file here
import cardiologyImg from '../../img/cardiology.jpg';
import pulmologyImg from '../../img/pulmology.jpeg';
import neurologyImg from '../../img/Neurology.jpeg';
import ophthalmologyImg from '../../img/Opthamology.jpeg';
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    cardiologyImg, pulmologyImg, neurologyImg, ophthalmologyImg // background colors
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div id="carousel" className="carousel">
      <div className="carousel-inner">
        {slides.map((color, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            // style={{ backgroundColor: color }}
            style={{ backgroundImage: `url(${color})`,backgroundRepeat:'no-repeat', backgroundSize:'cover' }} // Use inline styles for better performance
            alt={`Slide ${index + 1}`} // Alt text for accessibility purposes
            onClick={() => goToSlide(index)} // Clicking on slide triggers goToSlide function to change slide index
            // You can add other click events or additional styles here if needed
          >
            <h1 style={{textAlign:""}}>covid 19</h1>
            <p> </p>
            
            {/* No need for nested divs if you're using inline styles */}
          </div>
        ))}
      </div>
      {/* <div className="carousel-controls">
        <button className="prev" onClick={prevSlide}>{'<'}</button>
        <button className="next" onClick={nextSlide}>{'>'}</button>
      </div> */}
      <div className="carousel-indicators d-none d-lg-block">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
