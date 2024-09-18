import React, { useState } from "react";
import "./Surgery.css";
import surgery from "../../img/surgery.png";
import { IoSearchCircleSharp } from "react-icons/io5";
 
const Surgery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const surgeries = [
    "Cataract",
    "Gall Bladder Stones",
    "Varicose Veins",
    "Carpal Tunnel Syndrome",
    "Vaginal Cyst/Bartholin Cyst",

    
  ];
 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
 
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
 
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
 
  const filteredSurgeries = surgeries.filter((surgery) =>
    surgery.toLowerCase().includes(searchTerm)
  );
 
  return (
    <div className="surgery-container">
      <div className="search-bar">
<IoSearchCircleSharp className="surgery-research-icon" />
        <input
          type="text"
          placeholder="Search for surgeries"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
 
      <div className="surgery-content">
        <div className="surgeries-list">
          <h2 className="surgery-heading">Popular Surgeries</h2>
          {filteredSurgeries.length > 0 ? (
            <ul>
              {filteredSurgeries.map((surgery, index) => (
                <li key={index} className="surgery-item">
                  <span>{surgery}</span>
                  <button
                    className="submit-button"
                    onClick={handleModalOpen}
                  >
                    Submit request
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-results-message">This service is coming soon.</p>
          )}
        </div>
 
        <div className="surgery-image">
          <img src={surgery} alt="Surgery Illustration" />
        </div>
      </div>
 
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={handleModalClose}>
              &times;
            </span>
            <h3>Book free consultation</h3>
            <form className="modal-form">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
             
              <label>Mobile Number</label>
              <input type="tel" placeholder="Enter your mobile number" required />
             
              <label>Location</label>
              <select required>
                <option value="">Select location</option>
                <option value="Location1">Location1</option>
                <option value="Location2">Location2</option>
              </select>
             
              <div className="terms">
                <input type="checkbox" required />
                <span> By proceeding to submit, you agree to our <br/><a href="#">T&Cs</a></span>
              </div>
             
              <button type="submit" className="submit-modal-button">
                Request call back
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Surgery;
 