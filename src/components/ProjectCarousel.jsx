import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Carousal from "./Carousal";

const ProjectCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            {/* <img
              src={image}
              className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-1/2"
              alt={`Slide ${index + 1}`}
            /> */}

            <Carousal className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-1/2" />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        data-carousel-prev
      >
        <div className="">
          <ChevronLeft className="text-black hover:bg-gray-300 text-6xl size-16 rounded-full p-3 " />
        </div>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        data-carousel-next
      >
        <ChevronRight className="text-black hover:bg-gray-300 text-6xl size-16 rounded-full p-3" />
      </button>
    </div>
  );
};

export default ProjectCarousel;
