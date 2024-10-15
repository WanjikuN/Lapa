import FooterHome from "../components/FooterHome";
import Navbar from "../components/Navbar";
import OurCause from "./OurCause";
import WorkWithUs from "./WorkWithUs";
import "./About.css";

const AboutUs = ({ setPage, page }) => {


  return (
    <div id="container">
      {/* navbar */
        <Navbar />
        }
      <div id="about-cont">{}</div>
      <div>{/* footer */}
        <FooterHome />
      </div>
    </div>
  );
};

export default AboutUs;
