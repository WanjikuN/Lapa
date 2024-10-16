import "./App.css";
import "../src/assets/css/main.css";
import { Route, Routes } from "react-router-dom";
import "../src/components/Home/home.css"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurCause from "./pages/OurCause";
import WorkWithUs from "./pages/WorkWithUs";
import { useState } from "react";
import Contact from "./pages/Contact";

function App() {
    const [page, setPage] = useState('home');
console.log("Page",page)
  return (
    <Routes>
      <Route exact path="/" element={<Home setPage={setPage} />} />
      <Route
        path="/about-us"
        element={<AboutUs setPage={setPage} page={page} />}
      />
      <Route
        path="/contact"
        element={<Contact setPage={setPage} page={page} />}
      />
    </Routes>
  );
}

export default App;
