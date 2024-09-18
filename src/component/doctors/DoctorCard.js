import React from 'react';
import avator from '../../img/avator.png'
import { CiCalendar } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";

import { FaMapMarkerAlt } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={avator} alt={doctor.name} className="doctor-avatar" />
      <div className="doctor-details">
        <h2>{doctor.name}</h2>
        <p className="doctor-specialization">{doctor.specialization}</p>
        <p className="doctor-qualification">{doctor.qualification}</p>
        <p className="doctor-hospital"> <FaMapMarkerAlt style={{color:'#3152A9'}}/>{doctor.hospital}</p>
        <p className="doctor-availability">
          Availability: {doctor.availability}
        </p>
      </div>
      <div className="doctor-actions">

        <button className="book-button action-btn"><CiCalendar className='icon' />
          <span> Book Visit</span></button>

        <button className="call-button action-btn"><IoVideocamOutline className='icon' /><span> Make A Call</span></button>


      </div>
    </div>
  );
};

export default DoctorCard;
