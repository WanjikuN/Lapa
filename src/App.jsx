import "./App.css";
import "../src/assets/css/main.css";
import { Route, Routes } from "react-router-dom";
import "../src/components/Home/home.css"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurCause from "./pages/OurCause";
import WorkWithUs from "./pages/WorkWithUs";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/our-cause" element={<OurCause />} />
      <Route exact path="/work-with-us" element={<WorkWithUs />} />
    </Routes>
  );
}

export default App;
