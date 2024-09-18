import React from 'react';
import './About.css';


import visionImg from '../../img/SM891296.png';

import WorkingA from './WorkingA';
import FaqComponent from './FaqComponent';
import MissionVisionIcon from '../svg/MissionVisionIcon';
import Mission from '../svg/Mission';
import { IoCallOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";

import AboutBanner from './AboutBanner';
// import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    return (
        <>
            {/* Hero Image Section */}
          <AboutBanner/>

            {/* Vision Section */}
            {/* <Wave /> */}
            <div className="vision-section">
                <div className="vision-image">
                    <img src={visionImg} alt="Vision" />
                </div>
                <div className="vision-text">
                    <h2>
                        Welcome to Vinayak Virtual Hospital, where innovative online healthcare meets convenience and care.
                    </h2>
                    <h3>
                        <Mission /> Our Mission
                    </h3>
                    <p>To revolutionize the healthcare industry by transitioning traditional physical healthcare services to a comprehensive online platform, ensuring that quality medical care is accessible to everyone from the comfort of their homes.</p>
                    <h3>
                        <MissionVisionIcon /> Our Vision
                    </h3>
                    <p>To simplify the patient journey by offering a seamless, virtual healthcare experience that encompasses diagnosis, prescription, medication delivery, and follow-up consultations. Our mission is to eliminate the barriers to healthcare access, reduce patient inconvenience, and provide timely medical interventions.</p>
                </div>
            </div>

       
            <WorkingA />
            <FaqComponent />
        </>
    );
};

export default About;