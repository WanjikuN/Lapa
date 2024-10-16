import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({setPage}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
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
      <div
        className="logo"
        onClick={() => {
          setPage("Home");
          navigate("/");
        }}
      >
        <img src="./lapa-logo.png" alt="Logo" />
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="#home"
              onClick={() => {
                setPage("Home");
                navigate("/");
              }}
            >
              Home
            </a>
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
                  <a
                    onClick={() => {
                      setPage("AboutUs");
                      navigate("/about-us");
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setPage("OurCause");
                      navigate("/about-us");
                    }}
                  >
                    Our Cause
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      setPage("WorkWithUs");
                      navigate("/about-us");
                    }}
                  >
                    Work with US
                  </a>
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
