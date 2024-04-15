import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import Owners from "./pages/Owners";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen mb-20">
        <Navbar />
        <Home />
      </div>
      <div className="">
        <About />
        <Owners />
        <Projects />
        <Customers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
