import React, { useState, useEffect } from "react";

import CarouselProject from "../components/CarouselProject";
import { cloudinary_video_url } from "../utils/constants";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-8 flex flex-col border-b-2 min-h-screen justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
        Our Projects :{" "}
      </h1>
      <p className="m-4 text-center text-lg font-semibold py-4">
        Explore the portfolio of exceptional projects delivered by Nathkrupa
        Developers Ploting
      </p>

      <div className="w-full md:w-1/2 ">
        <CarouselProject />

        {/* <Carousal /> */}
      </div>
    </div>
  );
};

export default Projects;
