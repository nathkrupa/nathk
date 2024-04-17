import React, { useState, useEffect } from "react";
import { cloudinary_url } from "../utils/constants";

const CustomerCarousel = ({ customers }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === customers.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [customers.length]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${
            (currentSlide % customers.length) * (100 / customers.length)
          }%)`,
        }}
      >
        {customers.map((customer, index) => (
          <img
            key={index}
            src={`${cloudinary_url}${customer}`}
            alt={`customer ${index}`}
            className="p-2 md:p-4 shadow-md h-64 md:h-80 max-w-full"
          />
        ))}
        {/* Render images again to create a loop */}
        {customers.map((customer, index) => (
          <img
            key={customers.length + index}
            src={`${cloudinary_url}${customer}`}
            alt={`customer ${index}`}
            className="p-2 md:p-4 shadow-md h-64 md:h-80 max-w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerCarousel;
