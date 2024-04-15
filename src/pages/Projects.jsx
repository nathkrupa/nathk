import React, { useState, useEffect } from "react";
import Carousal from "../components/Carousal";
import { cloudinary_url, projects } from "../utils/constants";
import { CarouselPlugin } from "../components/CarouselPlugin";
import ImageCarousel from "../components/ImageCarousel";
import ProjectCarousel from "../components/ProjectCarousel";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const projectImages = [
    cloudinary_url + projects[0].coverImage,
    cloudinary_url + projects[1].coverImage,
  ];

  return (
    <div className="mt-8 flex flex-col border-b-2 min-h-screen ">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
        Our Projects :{" "}
        <span className="bg-red-700 text-xl p-4 text-white">
          Under construction
        </span>
      </h1>
      <p className="m-4 text-center text-lg font-semibold py-4">
        Explore the portfolio of exceptional projects delivered by Nathkrupa
        Developers Ploting
      </p>

      <div className=" overflow-hidden ">
        {/* {projects.map((project, index) => (
          <Carousal
            key={index}
            name={project.name}
            description={project.description}
            coverImage={project.coverImage}
            isActive={index === activeIndex}
            isNext={index === (activeIndex + 1) % projects.length}
          />
        ))} */}

        <ProjectCarousel images={projectImages} />

        {/* <CarouselPlugin projects={projects} /> */}
      </div>
    </div>
  );
};

export default Projects;

// import React from "react";
// import Carousal from "../components/Carousal";
// import { projects } from "../utils/constants";

// const Projects = () => {
//   return (
//     <div className="mt-8 flex flex-col   border-b-2 min-h-screen">
//       <h1 className="text-4xl  md:text-6xl font-serif font-bold text-center">
//         Our Projects
//       </h1>
//       <p className="m-4 text-center  text-lg font-semibold py-4">
//         Explore the portfolio of exceptional projects delivered by Nathkrupa
//         Developers Ploting
//       </p>

//       {projects.map((project, index) => (
//         <Carousal
//           key={index}
//           name={project.name}
//           description={project.description}
//           coverImage={project.coverImage}
//         />
//       ))}
//     </div>
//   );
// };

// export default Projects;
