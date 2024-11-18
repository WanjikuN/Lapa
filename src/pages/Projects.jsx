import React from "react";
import FooterHome from "../components/FooterHome";
import Navbar from "../components/Navbar";
import "./About.css";
import Claws from "../components/Projects/Claws";
import Ecosync from "../components/Projects/Ecosync";
import Justice from "../components/Projects/Justice";
import Waves from "../components/Projects/Waves";
import WorkingAnimals from "../components/Projects/Working";

const OurProjects = ({ setPage, page }) => {
  const renderContent = () => {
    switch (page) {
      case "Claws":
        return <Claws />;
      case "Ecosync":
        return <Ecosync />;
      case "Justice":
        return <Justice />;
      case "Waves":
        return <Waves />;
      case "Working":
        return <WorkingAnimals />;
      default:
        return <Claws />;
    }
  };

  return (
    <div id="container">
      <Navbar setPage={setPage} />
      <div id="about-cont">{renderContent()}</div>

      {/* footer */}
      <FooterHome />
    </div>
  );
};

export default OurProjects;
