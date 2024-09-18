import React from 'react';
import './NeonatologySection.css';
import home3 from '../../img/Neonatology banner img.png';
import image1 from '../../img/whychoose img/image1.png';
import image2 from '../../img/whychoose img/image2.png';
import image3 from '../../img/whychoose img/image3.png';
import image4 from '../../img/whychoose img/image4.png';
import image5 from '../../img/whychoose img/image5.jpg';
import image6 from '../../img/whychoose img/image6.jpg';


const NeonatologySection = () => {
  return (
    <div className="neonatology-section">
      <div className="image-section">
        <img src={home3} alt="Neonatal Care" />
      </div>
      <div className="text-section">
        <h1 className="title">
          Why <span>Choose</span> us ?
        </h1>

        <div className="flex-container1">
          <div className="flex-item">
            <img src={image1} alt="Heart Rate" />
            <h3>Virtual Wards</h3>
            <p>Our unique virtual ward service transforms patients homes into healthcare facilities, offering remote monitoring and treatment without the need for hospital admission.</p>
          </div>
          <div className="flex-item">
            <img src={image2} />
            <h3>Comprehensive Care Packages</h3>
            <p>
            We offer cost-effective healthcare packages, including monthly health insurance and EMI options, making high-quality medical care affordable for all.
            </p>
          </div>
          <div className="flex-item">
            <img src={image3} alt="Heart Rate" />
            <h3>Seamless Integration</h3>
            <p>Our platform seamlessly integrates consultations, diagnostics, and medication delivery, providing a one-stop solution for all healthcare needs.</p>
          </div>
        
        </div>
        <div className="flex-container1">
          <div className="flex-item">
            <img src={image4} alt="Heart Rate" />
            <h3>User-friendly Application</h3>
            <p>The intuitive and easy-to-use mobile application ensures that patients of all ages and technical abilities can effortlessly access healthcare services.</p>
          </div>
          <div className="flex-item">
            <img src={image5} />
            <h3>On-demand Diagnostic Services</h3>
            <p>
            We provide home collection for diagnostic tests, ensuring patients receive necessary medical evaluations without leaving their homes.
            </p>
          </div>
          <div className="flex-item">
            <img src={image6} alt="Heart Rate" />
            <h3>24/7 Medical Support</h3>
            <p>Our round-the-clock availability of medical professionals ensures that patients have access to expert medical advice and care at any time of the day.</p>
          </div>
        
        </div>



      </div>
    </div>
  );
};

export default NeonatologySection;
