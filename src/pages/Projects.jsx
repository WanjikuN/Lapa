import React from "react";
import FooterHome from "../components/FooterHome";
import Navbar from "../components/Navbar";
import "./About.css";
import "../components/Projects/Projects.css";
import Claws from "../components/Projects/Claws";
import Ecosync from "../components/Projects/Ecosync";
import Justice from "../components/Projects/Justice";
import Waves from "../components/Projects/Waves";
import WorkingAnimals from "../components/Projects/Working";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OurProjects = ({ setPage, page }) => {
  const navigate = useNavigate();
  const renderContent = () => {
    switch (page) {
      case "Claws":
        return <Claws page={page} />;
      case "EcoSyNC":
        return <Ecosync page={page} />;
      case "Justice for Wildlife":
        return <Justice page={page} />;
      case "Waves":
        return <Waves page={page} />;
      case "Working Animals":
        return <WorkingAnimals page={page} />;
      default:
        return <Claws page={page} />;
    }
  };
  const projectDetails = () => {
    switch (page) {
      case "Claws":
        return (
          <p>
            Community Legal Aid Workers (CLAWS) provide legal assistance to
            communities affected by human-wildlife conflict
          </p>
        );
      case "EcoSyNC":
        return (
          <p>
            We implement Kenya’s first independent certification program that
            verifies the eco - sustainability of farm production.{" "}
          </p>
        );
      case "Justice for Wildlife":
        return (
          <p>
            We leverage laws and technology to empower law enforcement and
            disrupt criminal networks that trade in wildlife.
          </p>
        );
      case "Waves":
        return (
          <p>
            Project WAVES is a campaign for the conservation of marine species
            and protection of their habitats.
          </p>
        );
      case "Working Animals":
        return (
          <p>
            We advocate for strengthened legal protections for working animals
            from cruelty and over exploitation.
          </p>
        );
      default:
    }
  };
  return (
    <div id="container">
      <Navbar setPage={setPage} />
      <div id="hero-projects">
        {/* hero projects section */}
        <h2>
          <span className="three">
            Our <span style={{ color: "#581411" }}>Projects</span>
          </span>
        </h2>
        <br />
        {/* <p>Project {page}</p> */}
        <Button
          className="project-button"
          variant="contained"
          onClick={() => {
            // Scroll to the element with id "projects-cont"
            document
              .getElementById("projects-cont")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          sx={{
            backgroundColor: "#581411",
            fontFamily: "Source Sans Pro",
            padding: "10px 20px",
            textTransform: "capitalize",
            marginTop: "15px",
            fontSize: "20px",
            minWidth: "230px",
            fontWeight: "bold",
            color: "#ed8e1c",
          }}
        >
          {page}
        </Button>
        <div id="desc">{projectDetails()}</div>
      </div>
      <div id="projects-cont">{renderContent()}</div>

      {/* footer */}
      <FooterHome />
    </div>
  );
};

export default OurProjects;
