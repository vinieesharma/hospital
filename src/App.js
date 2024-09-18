import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import AboutUs from './component/About/About';
import Footer from './component/footer/Footer';
import Home from './component/Home/Home';
import Contact from './component/contact/Contact';
import Labtest from './component/Labtest/Labtest';
import BookAmbulance from './component/Book-ambulance/BookAmbulance';
import Surgery from './component/Surjery/Surjery';
import BookAppointment from './component/bookappointment/BookAppointment';
import Doctors from './component/doctors/Doctors';
import Privacypolice from './component/Privacypolice';
import Services from './component/Services';
import Shop from './component/Services/Shop';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/labtest" element={<Labtest />} />
        <Route path="/BookAmbulance" element={<BookAmbulance />} />
        <Route path="/Surgery" element={<Surgery />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/privacypolice" element={<Privacypolice />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ordermedicine" element={<Shop/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
