import React, { useState } from "react";
import "./home.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutOpen(!aboutOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <div id="navbar">
      <div className="logo">
        <img src="./lapa-logo.png" alt="Logo" />
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li
            onClick={toggleAboutDropdown}
            // onMouseEnter={toggleServicesDropdown}
            // onMouseLeave={toggleServicesDropdown}
          >
            <a href="#about">About</a>
            {aboutOpen && (
              <ul className="dropdown">
                <li>
                  <a href="#team">Our Cause</a>
                </li>
                <li>
                  <a href="#mission">Our Partners</a>
                </li>
                <li>
                  <a href="#mission">Work with US</a>
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={toggleServicesDropdown}
            // onMouseEnter={toggleServicesDropdown}
            // onMouseLeave={toggleServicesDropdown}
          >
            <a href="#services">Services</a>
            {servicesOpen && (
              <ul className="dropdown">
                <li>
                  <a href="#ProjectWaves">Project Waves</a>
                </li>
                <li>
                  <a href="#Claws">Claws</a>
                </li>
                <li>
                  <a href="#JusticeforWildlife">Justice for Wildlife</a>
                </li>
                <li>
                  <a href="#WorkingAnimals">Working Animals</a>
                </li>
                <li>
                  <a href="#EcoSyNC">EcoSyNC</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
