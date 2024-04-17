import React, { useState } from "react";
import { cloudinary_url, projects } from "../utils/constants";
import { Link } from "react-router-dom";
const Carousal = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const { name, description, coverImage } = props;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className=" flex justify-center py-7 ">
      <div
        className="relative overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 w-full md:w-1/2 object-cover h-72 px-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: `url('${cloudinary_url}${coverImage}')`,
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-t from-black opacity-50 z-10"></div>{" "}
        {/* Lighter black gradient */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 font-serif z-20">
          <h2 className="text-white text-3xl md:text-5xl p-4 font-bold">
            {name}
          </h2>
          <p className="text-white text-base px-4 md:w-4/5 pb-2">
            {description}
          </p>
          <Link to={`/${name.replace(/\s/g, "").toLowerCase()}`}>
            <button className="mt-2 mx-4 bg-white text-sm py-2 px-4 hover:bg-purple-600 hover:text-white">
              Learn More
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
