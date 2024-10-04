import home from "../assets/images/hero-home.png";
import home1 from "../assets/images/bg.png";
import HeroSection from "../components/Home/HeroSection";
import Navbar from "../components/Home/Navbar";

const Home = () =>{
  return (
    <div id="home">
      {/* <img src={home} alt="hero image"></img> */}
      {/* <img src={home1} alt="hero image"></img> */}
      <Navbar />
      <HeroSection />
    </div>
  );
}
export default Home;