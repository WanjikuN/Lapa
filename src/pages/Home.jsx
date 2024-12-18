import home from "../assets/images/hero-home.png";
import home1 from "../assets/images/bg.png";
import HeroSection from "../components/Home/HeroSection";
import Approach from "../components/Home/Approach";
import Approach2 from "../components/Home/Approach2";
import Projects from "../components/Home/Projects";
import OurPartners from "../components/Home/OurPartners";
import FooterHome from "../components/FooterHome";
import Navbar from "../components/Navbar";

const Home = ({setPage}) =>{
  return (
    <div id="home">
      {/* <img src={home} alt="hero image"></img> */}
      {/* <img src={home1} alt="hero image"></img> */}
      <Navbar  setPage={setPage}/>
      <HeroSection />
      
      <Approach2 />
      <Projects setPage={setPage}/>
      <OurPartners />
      <FooterHome />
    </div>
  );
}
export default Home;