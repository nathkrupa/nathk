import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Carousal from "./Carousal";

export function CarouselPlugin({ projects }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const carouselItems = projects.map((project, index) => (
    <Carousal
      key={index}
      name={project.name}
      description={project.description}
      coverImage={project.coverImage}
    />
  ));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>{carouselItems}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
