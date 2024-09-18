import React from "react";
import "./NeonatalTelehealth.css"; 
import home4 from '../../img/background_02 (1).jpg';
import { FaRegCalendarCheck } from "react-icons/fa6";


const NeonatalTelehealth = () => {
  return (
    <div className="neonatal-container">
      <div className="flex-box">
        <div className="box1">
          <h2>Neonatal <span>Telehealth</span> Services Available</h2>
          <p>Dedicated neonatologists are available seven days a week, 8 a.m. to 5 p.m., to provide advice through a video call.</p>
     <div className="make-appointment">
     <a href='/'><FaRegCalendarCheck/> Make an appointment</a>
      </div> 
        </div>
     
      </div>
      <div class="custom-shape-divider-bottom-1725517865">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
};

export default NeonatalTelehealth;
