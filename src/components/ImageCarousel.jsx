import React, { useState, useEffect } from "react";
import { cloudinary_url } from "../utils/constants";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "v9zf9qtyomz8erhjbsdz",
    "oq7xu8plkxg9s8xglfqz",
    "usmwejvsji3aoan0hl4i",
    "qjycqkyxn5zjj3ausq9f",
    "kcwox0mhtykgojab5mvd",
    "bvhmksfdqomyuh8zcsdz",
    "baiea5fwhos494bt1ek6",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-64 h-64 flex-none mx-4 ${
            index === currentIndex ? "transform scale-110" : ""
          }`}
        >
          <img
            src={`${cloudinary_url}${image}`}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
