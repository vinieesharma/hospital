import React from 'react';
import DoctorCard from './DoctorCard';

const doctors = [

    {
        name: 'Dr. Faisel Usmani',
        specialization: 'General Physician',
        qualification: 'MBBS, MD-General Medicine',
        hospital: 'Aster RV Hospital JP Nagar',
        availability: 'Mon - Sat 10:00 a.m to 2:00 p.m',
        image: 'doctor-avatar-url'
    },
  {
    name: 'Dr. Swapnil Koche',
    specialization: 'General Physician',
    qualification: 'MBBS, MD-General Medicine',
    hospital: 'Aster RV Hospital JP Nagar',
    availability: 'Mon - Sat 10:00 a.m to 2:00 p.m',
    image: 'doctor-avatar-url' 
  },
  {
    name: 'Dr. Richa Mishra',
    specialization: 'General Physician',
    qualification: 'MBBS, MD-General Medicine',
    hospital: 'Aster RV Hospital JP Nagar',
    availability: 'Mon - Sat 10:00 a.m to 2:00 p.m',
    image: 'doctor-avatar-url' 
  },
  {
    name: 'Dr. Richa Mishra',
    specialization: 'General Physician',
    qualification: 'MBBS, MD-General Medicine',
    hospital: 'Aster RV Hospital JP Nagar',
    availability: 'Mon - Sat 10:00 a.m to 2:00 p.m',
    image: 'doctor-avatar-url' 
  },

];

const DoctorList = () => {
  return (
    <div className="doctor-list">
      {doctors.map((doctor, index) => (
        <DoctorCard doctor={doctor} key={index} />
      ))}
    </div>
  );
};

export default DoctorList;
