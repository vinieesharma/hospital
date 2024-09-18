import React from 'react';
import './Footer.css'; // Ensure your styles are in Footer.css
// import styles from './Fonts.module.css';
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import logo from '../../img/Sloane Virtual Hospital logo transparent 1.png';
import { CiCalendar } from "react-icons/ci";



const Footer = () => {
    return (

        <>
            <footer className="bt-site-footer-main">
            <div class="custom-shape-divider-bottom-1725689494">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

<div className="button-container">
      <span className="button-text">Looking for online consultation?</span>
     <a href='/bookappointment' style={{textDecoration:'none'}}> <button className="book-test-btn">
        {/* <img src={calendarIcon} alt="Calendar Icon" className="icon" /> */}
       
        <CiCalendar   className="icon"/>
        Book appointment
      </button></a>
    </div>

            </footer>


            <footer className="bt-site-footer">
                <section id="footer-section" className="footer-section">

                    <div className="footer-content">
                        <div className="footer-logo">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="230"
                                height="60"
                                src={logo}
                                alt="Logo Footer"
                            />
                            <p>We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
                        </div>

                        <div className="footer-menu">
                            <div className="footer-menu-section">
                                <h6>Services</h6>
                                <ul>
                                    <li><a href="/bookappointment">Book  Appointment</a></li>
                                    <li><a href="/ordermedicine" aria-current="page">Order medicine</a></li>
                                    <li><a href="/labtest">Lab Tests</a></li>
                                    <li><a href="BookAmbulnace/">Book Ambulance</a></li>
                                    <li><a href="/Surgery">Surgery</a></li>
                                </ul>
                            </div>

                            <div className="footer-menu-section">
                                <h6>Pricing & Fees</h6>
                                <ul>
                                    <li><a href="/">Home </a></li>
                                    <li><a href="/about">About us</a></li>
                                    <li><a href="services">Services</a></li>
                                    <li><a href="/contactus">Contact Us </a></li>
                                    
                                </ul>
                            </div>

                            <div className="footer-menu-section">
                                <h6>Connect</h6>
                                <div className="footer-social-links">
                                    <a href="https://www.facebook.com/boldthemes/" target="_blank" rel="noopener noreferrer" className="social-icon facebook-icon"
                                    >
                                        <CiFacebook className='icon-size' /></a>
                                    <a href="https://twitter.com/bold_themes" target="_blank" rel="noopener noreferrer" className="social-icon twitter-icon">
                                        <BsTwitterX className='icon-size' /> </a>
                                    <a href="https://www.instagram.com/bold_themes/" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">
                                        <IoLogoInstagram className='icon-size' /></a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
                                        <TiSocialLinkedinCircular className='icon-size' /></a>
                                </div>
                                <div className="contact-info">
                                    <p>8619909744</p>
                                    <p>info@sloanevirtualhospital.com</p>
                                    {/* <p>60 East 65th Street, New York</p> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </section>



                <div className="footer-bottom">

                    <div className="footer-policy-links">
                        <div> ©2024 Sloane Virtual Hospital. All rights reserved </div>
                            <div className='privacylink'>
                                <span >
                                    <a href="/privacypolice">Privacy Policy</a>
                                    {/* <a href="https://cliniq.bold-themes.com/curves/about/">Cookie Policy</a> */}
                                </span>
                            </div>





                        </div>
                    </div>
         

            </footer>

        </>
    );
}

export default Footer;
