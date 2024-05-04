import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Owners from "./pages/Owners";

function App() {
  return (
    <div className="bg-gray-100 max-w-screen-2xl overflow-hidden">
      <div id="home">
        <Navbar />
        <Home />
      </div>
      <div id="about" className="pt-8">
        <About />
      </div>
      <div>
        <Owners />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="customers">
        <Customers />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
