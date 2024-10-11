import home from "../assets/images/hero-home.png";
import home1 from "../assets/images/bg.png";
import HeroSection from "../components/Home/HeroSection";
import Navbar from "../components/Home/Navbar";
import Approach from "../components/Home/Approach";
import Approach2 from "../components/Home/Approach2";
import Projects from "../components/Home/Projects";
import OurPartners from "../components/Home/OurPartners";
import FooterHome from "../components/Home/FooterHome";

const Home = () =>{
  return (
    <div id="home">
      {/* <img src={home} alt="hero image"></img> */}
      {/* <img src={home1} alt="hero image"></img> */}
      <Navbar />
      <HeroSection />
      
      <Approach2 />
      <Projects />
      <OurPartners />
      <FooterHome />
    </div>
  );
}
export default Home;