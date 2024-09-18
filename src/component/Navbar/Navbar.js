import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../img/Sloane Virtual Hospital logo transparent 1.png';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="ClinIQ Logo" />
        </a>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contactus">Contact us</a></li>
        </ul>
        <div className="nav-actions">
          <a href="/search" className="search">
            <i className="fas fa-search"></i>
          </a>
          <a href="/bookappointment" className="button book-appointment">
            Book Appointment
          </a>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
