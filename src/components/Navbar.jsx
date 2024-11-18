import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track the open dropdown
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
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
          <li onClick={() => toggleDropdown("about")}>
            <a href="#about">About</a>
            {openDropdown === "about" && (
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
                    Work with Us
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => toggleDropdown("projects")}>
            <a href="#projects">Our Projects</a>
            {openDropdown === "projects" && (
              <ul className="dropdown">
                <li>
                  <a  onClick={() => {
                      setPage("Waves");
                      navigate("/projects");
                    }}>Project Waves</a>
                </li>
                <li>
                  <a  onClick={() => {
                      setPage("Claws");
                      navigate("/projects");
                    }}>Claws</a>
                </li>
                <li>
                  <a  onClick={() => {
                      setPage("Justice for Wildlife");
                      navigate("/projects");
                    }}>Justice for Wildlife</a>
                </li>
                <li>
                  <a  onClick={() => {
                      setPage("Working Animals");
                      navigate("/projects");
                    }}>Working Animals</a>
                </li>
                <li>
                  <a  onClick={() => {
                      setPage("EcoSyNC");
                      navigate("/projects");
                    }}>EcoSyNC</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setPage("Contact");
                navigate("/contact");
              }}
            >
              Contact
            </a>
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
