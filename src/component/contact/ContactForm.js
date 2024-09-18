import React, { useState } from 'react';
import './ContactForm.css';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaRegCalendarCheck } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri'; // New Share Icon
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social Icons
 
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
 
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };
 
  return (
    <div className="contact-container">
      <div className="left-section">
        <h1>We are here to  <span className="highlight"> Assist</span> you anytime</h1>
        {/* <p>Delivering world-class neonatology care</p> */}
       
        <div className="info-row">
          {/* <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <h2>Location</h2>
            <p>New York<br />60 East 65th Street<br />NY 10065</p>
          </div>
         
          <div className="info-item">
            <FaClock className="icon" />
            <h2>Hours</h2>
            <p>Mon-Wed: 8am – 7pm<br />Thursday: 8am – 9pm<br />Friday: 8am – 5pm</p>
          </div>   */}
         
          {/* <div className="info-item">
            <RiShareForwardLine  className="icon" />
            <h2>Social</h2>
            <div className="social-icons">
              <FaFacebookF className="social-icon " /> Facebook <br />
              <FaInstagram className="social-icon " /> Instagram <br />
              <FaTwitter className="social-icon " /> Twitter
            </div>
          </div> */}
        </div>
       
        <div className="flex-container-contact">
          <div className="flex-item flex">
            <div className="support-text">
              <p>Support Line 24/7 <br />
              <div className='support-text-flex '>
               
                <a className="bold-text"><FaPhoneAlt className="icon" />88 700 600</a>
              </div>
              </p>
            </div>
          </div>
 
          <div className="line-contact"></div>
 
          <div className="flex-item">
            <p>Online Schedule <br />
              <div className='support-text-flex '>
                <FaRegCalendarCheck className="icon" />
                <a href="#" className="bold-text">Book here</a>
              </div>
            </p>
          </div>
        </div>
      </div>
 
      <div className="right-section">
        <h2>Send us a message</h2>
        {submitted ? (
          <p>Thank you for your message! We'll get back to you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">First and Last name*</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
 
            <label htmlFor="email">Email address*</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
 
            <label htmlFor="condition">Condition*</label>
            <input type="text" id="condition" name="condition" placeholder="Clinical Depression" required />
 
            <label htmlFor="notes">Additional notes</label>
            <textarea id="notes" name="notes" placeholder="Additional notes"></textarea>
 
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
 
export default ContactForm;