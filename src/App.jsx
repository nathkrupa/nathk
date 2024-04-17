import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="bg-gray-100">
      <div id="home">
        <Navbar />
        <Home />
      </div>
      <div id="about" className="pt-8">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="customers">
        <Customers />
      </div>
    </div>
  );
}

export default App;
