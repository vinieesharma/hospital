import React from 'react';
import './Banner.css'; // Import custom CSS
import { IoCallOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-text">
        
        Your Complete <span className="highlight">Virtual Healthcare</span> in <span className="highlight neonatology"> Solution</span>
        </h1>
        <div className="buttons-container">
          <a href='/about' className='Abouts-bannerlink'>
          <button className="btn btn1 about-us">About Us</button>
          </a>
          <a href='/services' className='services-bannerlink'>
          <button className="btn btn2 services"> Our Services</button>

          </a>
        </div>
        <div className="schedule-container">
          {/* <hr className="divider" /> */}
          <div className="schedule-texts">
            <a href=''>
            <span className="schedule-text">Make an Appointment <br/>  
           
         <span className='callno'>  <IoCallOutline className='icon'/>8619909744</span> </span>
            

            </a>
          
            <hr className="vertical-divider" />
            <span className="schedule-text">Online Schedule<br/>
            <a href='/bookappointment'><span className='callno'> <FaRegCalendarCheck  className='icon'/> Book Here</span></a> </span>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1725689494">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
   
    </div>
  );
};

export default Banner;
