import React from 'react';
import './BookAmbulance.css';
import ambulance from '../../img/book-ambulance.png'
import Caroselimg from './Caroselimg';
 
const BookAmbulance = () => {
  return (
    <div className="ambulance-container">
      <h1 className="ambulance-heading">Book Ambulance</h1>
      <div className="ambulance-content">
        <div className="ambulance-form">
          <form>
            <p className="form-title"><strong>Please provide booking information</strong></p>
            <p className="form-subtitle">We provide support within 20 minutes</p>
 
            <div className="form-group">
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input type="text" placeholder="Enter your location" />
            </div>
            {/* <div className="form-group">
              <label>Ambulance Type:</label>
              <select>
                <option value="basic">Basic Ambulance</option>
                <option value="icu">ICU Ambulance</option>
                <option value="ventilator">Ventilator Ambulance</option>
              </select>
            </div> */}
 
            {/* <div className="form-group checkbox-group">
              <input type="checkbox" id="updates" />
              <label htmlFor="updates">I want to receive updates on the same number</label>
            </div> */}
 
            <button type="submit" className="submit-btn">Book Now</button>
          </form>
        </div>
        <div className="ambulance-image">
          {/* <img src={ambulance} alt="Ambulance" /> */}
          <Caroselimg/>
        </div>
      </div>
    </div>
  );
};
 
export default BookAmbulance;