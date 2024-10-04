import home from "../assets/images/hero-home.png";
import home1 from "../assets/images/bg.png";
import HeroSection from "../components/Home/HeroSection";
import Navbar from "../components/Home/Navbar";
import Approach from "../components/Home/Approach";

const Home = () =>{
  return (
    <div id="home">
      {/* <img src={home} alt="hero image"></img> */}
      {/* <img src={home1} alt="hero image"></img> */}
      <Navbar />
      <HeroSection />
      <Approach />
    </div>
  );
}
export default Home;