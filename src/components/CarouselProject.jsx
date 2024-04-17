import { Carousel } from "flowbite-react";
import { cloudinary_url, projects } from "../utils/constants";
import Carousal from "./Carousal";

function CarouselProject() {
  return (
    <div className="h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={1000}>
        {projects.map((project, index) => (
          <Carousal
            key={index}
            name={project.name}
            description={project.description}
            coverImage={project.coverImage}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselProject;
