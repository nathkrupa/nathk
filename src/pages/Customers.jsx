import React from "react";
import { cloudinary_url } from "../utils/constants";
import ImageCarousel from "../components/ImageCarousel";

const Customers = () => {
  return (
    <div className="mt-8 flex flex-col border-b-2 min-h-screen justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
        Satisfied Customers :{" "}
        <span className="bg-red-700 text-xl p-4 text-white">
          Under construction
        </span>
      </h1>
      <p className="m-4 text-center text-lg font-semibold py-4">
        At Nathkrupa Developers Ploting, our success is defined by the
        satisfaction of our customers
      </p>

      <div className="flex gap-5 overflow-x-auto">
        {/* {customerImages.map((image, index) => (
          <img
            key={index}
            src={`${cloudinary_url}${image}`}
            alt="customer"
            className="w-"
          />
        ))} */}

        <ImageCarousel />
      </div>
    </div>
  );
};

export default Customers;
