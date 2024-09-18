import React from 'react';
import './Doctors.css';
import DoctorList from './DoctorsList';
import { FaUserMd } from 'react-icons/fa'; // Import doctor icon
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon
import doctor from '../../img/doctor 1.png';
import SearchBar from './SearchBar';
import { IoSearchCircleSharp } from "react-icons/io5";

function Doctors() {
    return (
      <>
      <div className='doctors-container'>
        <div className="app-container">
          <div className='search-div'>

          <IoSearchCircleSharp className="icon" /> <SearchBar className="searchbar-section"/>

          </div>
        <div className='doctor-location'>
          <div className='doctorName'>
            <FaUserMd className="icon" /> {/* Doctor Icon */}
            <select className="doctor-select">
              <option value="general">General Physician</option>
              <option value="cardiologist">Cardiologist</option>
              <option value="dentist">Dentist</option>
            </select>
          </div>
          <div className="location">
            <FaMapMarkerAlt className="icon" /> {/* Location Icon */}
            <select className="location-select">
              <option value="jaipur">Jaipur, Rajasthan, India</option>
              <option value="mumbai">Mumbai, Maharashtra, India</option>
              <option value="delhi">Delhi, India</option>
            </select>
          </div>
        </div>
        <div className="main-section">
          <div className='doctor-list-container'>
          <DoctorList />

          </div>
        
        </div>
      </div>
        <div className="sidebar">
            <img src={doctor} alt='doctor' />
          </div>
      </div>
      
      
      </>
    
    );
  }
  

export default Doctors;
