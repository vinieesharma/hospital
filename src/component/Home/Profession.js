import React from 'react';
import './Profession.css';
import doctor from '../../img/icons/doctor.png'
import s from '../../img/icons/stethoscope (2).png'
import insurance from '../../img/icons/insurance.png'
import consult from '../../img/icons/consulting.png'



function Profession() {
  return (
<>


    <div className="profession-container">

     
      {/* Profession 1 */}
      <div className="profession-item">
<img src ={doctor}/>
        <h3 className="profession-heading">Professional Staff</h3>
        <p className="profession-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam quis semper.</p>
      </div>

      {/* Repeat the below block for the other 3 professions, changing the heading and any other necessary details */}
      <div className="profession-item">
      <img src ={s}/>
        <h3 className="profession-heading">Telehealth Available</h3>
        <p className="profession-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam quis semper.</p>
      </div>

      <div className="profession-item">
        <img src ={insurance}/>
        <h3 className="profession-heading">insurance partners</h3>
        <p className="profession-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam quis semper.</p>
      </div>

      <div className="profession-item">
        <img src ={consult}/>
        <h3 className="profession-heading">consult our providers</h3>
        <p className="profession-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam quis semper.</p>
      </div>
      
    </div>
    </>
  );
}

export default Profession;
