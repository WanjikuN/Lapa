import React from "react";
import FooterHome from "../components/FooterHome";
import Navbar from "../components/Navbar";
import OurCause from "./OurCause";
import WorkWithUs from "./WorkWithUs";
import "./About.css";
import AboutUsMain from "./AboutUsMain";

const AboutUs = ({ setPage, page }) => {
  const renderContent = () => {
    switch (page) {
      case "OurCause":
        return <OurCause />;
      case "WorkWithUs":
        return <WorkWithUs />;
      case "AboutUs":
        return <AboutUsMain />;
      default:
        return <AboutUsMain />;
    }
  };

  return (
    <div id="container">
      {/* Render the Navbar and pass setPage to update the page state */}
      <Navbar setPage={setPage} />
      <div id="about-cont">
        {renderContent()} {/* Conditionally render based on page */}
      </div>
      
        {/* footer */}
        <FooterHome />
     
    </div>
  );
};

export default AboutUs;
