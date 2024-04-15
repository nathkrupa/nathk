import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-center bg-white-A700 p-2 fixed top-0 left-0 right-0 shadow-md bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4">
        <img
          src="https://res.cloudinary.com/dvdrkucjh/image/upload/ujhd6oa8n0sgtbqlaggz"
          alt="logo"
          className=" w-20 object-cover "
        />
        <ul className="hidden  gap-16 text-lg font-semibold font-poppins md:flex">
          <li>
            <a href="#">
              <div className="flex">
                <h1>home</h1>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex">
                <h1>About</h1>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex">
                <h1>Projects</h1>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex self-start">
                <h1>Customers</h1>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex self-start">
                <h1>Contact</h1>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
