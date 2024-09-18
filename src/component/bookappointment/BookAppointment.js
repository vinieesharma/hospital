import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookAppointment.css';
import g from '../../img/ICONS FOR HEALTHCARE/general physician.png';
import Pediatrician from '../../img/ICONS FOR HEALTHCARE/pediatrician.png';
import Dentist from '../../img/ICONS FOR HEALTHCARE/dentist.png';
import Cardiologist from '../../img/ICONS FOR HEALTHCARE/cardiologist.png';
import ent from '../../img/ICONS FOR HEALTHCARE/ent.png';
import women from '../../img/ICONS FOR HEALTHCARE/women-issues.png';
import skin from '../../img/ICONS FOR HEALTHCARE/skin problem.png';
// Add other images below:
import cold from '../../img/ICONS FOR HEALTHCARE/cold.png';
import dermatology from '../../img/ICONS FOR HEALTHCARE/dermatology.png';
import gynecology from '../../img/ICONS FOR HEALTHCARE/gynecology.png';
import pregnancy from '../../img/ICONS FOR HEALTHCARE/pregnancy.png';
import asthma from '../../img/ICONS FOR HEALTHCARE/asthma.png';
import neurology from '../../img/ICONS FOR HEALTHCARE/neurology.png'
import cervical from '../../img/ICONS FOR HEALTHCARE/cervical.png'
import orthopedic from '../../img/ICONS FOR HEALTHCARE/orthopedic.png'

// import heartDisease from '../../img/ICONS FOR HEALTHCARE/heart-disease.png';
 
const BookAppointment = () => {
    const [selectedSpecialties, setSelectedSpecialties] = useState([]); // Array to hold selected specialties
    const navigate = useNavigate();
 
    const specialties = [
        { id: 1, name: 'General Physician', image: g },
        { id: 2, name: 'Pediatrician', image: Pediatrician },
        { id: 3, name: 'Dentist', image: Dentist },
        { id: 4, name: 'Cardiologist', image: Cardiologist },
        { id: 5, name: 'Ent', image: ent },
        { id: 6, name: 'Women Issues', image: women },
        { id: 7, name: 'Skin Problem', image: skin },
        { id: 8, name: 'Cold and Fever', image: cold },
        { id: 9, name: 'Dermatology', image: dermatology },
        { id: 10, name: 'Gynecology', image: gynecology },
        { id: 11, name: 'Pregnancy', image: pregnancy },
        { id: 12, name: 'Asthma', image: asthma },
        { id: 13, name: 'Neurology', image: neurology },
        { id: 14, name: 'Cervical', image: cervical },
        { id: 15, name: 'Orthopedic', image: orthopedic },





        // { id: 13, name: 'Heart Disease', image: heartDisease }
    ];
 
    // Toggle specialty selection
    const handleSpecialityClick = (id) => {
        setSelectedSpecialties(prevSelected => {
            if (prevSelected.includes(id)) {
                // If specialty is already selected, remove it
                return prevSelected.filter(spec => spec !== id);
            } else {
                // Otherwise, add it to the selected array
                return [...prevSelected, id];
            }
        });
    };
 
    // Confirm selected specialties and navigate
    const handleConfirmClick = () => {
        if (selectedSpecialties.length > 0) {
            const selected = specialties.filter(spec => selectedSpecialties.includes(spec.id));
            navigate('/doctors', { state: { selectedSpecialties: selected } });
        } else {
            alert('Please select at least one specialty!');
        }
    };
 
    return (
        <div className="book-appointment-container">
            <h2>Choose Specialties</h2>
            <div className="speciality-grid">
                {specialties.map(speciality => (
                    <div
                        key={speciality.id}
                        className={`speciality-card ${selectedSpecialties.includes(speciality.id) ? 'selected' : ''}`}
                        onClick={() => handleSpecialityClick(speciality.id)}
                    >
                        {selectedSpecialties.includes(speciality.id) && (
                            <div className="checkbox">
                                <input type="checkbox" checked readOnly />
                            </div>
                        )}
                        <img src={speciality.image} alt={speciality.name} />
                        <p>{speciality.name}</p>
                    </div>
                ))}
            </div>
            <br/>
            <button className="confirm-button" onClick={handleConfirmClick}>Confirm →</button>
        </div>
    );
};
 
export default BookAppointment;