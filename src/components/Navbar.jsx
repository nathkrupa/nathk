import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex items-center justify-center p-2 fixed top-0 left-0 right-0 shadow-md bg-white z-50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4">
        <img
          src="https://res.cloudinary.com/dvdrkucjh/image/upload/ujhd6oa8n0sgtbqlaggz"
          alt="logo"
          className=" w-20 object-cover "
        />
        <ul className="hidden  gap-16 text-lg font-semibold font-poppins md:flex">
          <li className="hover:text-purple-700">
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("about")}>About</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("projects")}>Projects</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("customers")}>Customers</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("contact")}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
