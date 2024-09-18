import React from 'react'
import './ContactBanner.css'
import contact from '../../img/contact.jpg'


function ContactBanner() {
  return (
    <div>
        <div className="about-us-container">
                <img
                    src={contact}
                    alt="Hero"
                    className="background-image"
                />
                <div className="overlay-text">
                    <h1>The right care for your recovery</h1>
                    <p>Sloane Virtual Hospital delivers comprehensive online healthcare, offering video consultations, digital prescriptions, medication delivery, and diagnostic services, all supported by a strong network of medical professionals.</p>
                    <div className="flex-container">
                        <div className="flex-item">
                            <span>Support Line 24/7</span>
                            <span>88 700 600</span>
                        </div>
                        <div className="line"></div>
                        <div className="flex-item">
                            <span>Online Schedule</span>
                            <span>Book here</span>
                        </div>
                    </div>
                </div>
            </div>
 
    </div>
  )
}

export default ContactBanner
