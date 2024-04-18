import React from "react";
import { cloudinary_url } from "../utils/constants";
import ImageCarousel from "../components/ImageCarousel";
import CarouselTestimonial from "../components/CustomerCarousel";
import CustomerCarousel from "../components/CustomerCarousel";
import CarouselProject from "../components/CarouselProject";

const Customers = () => {
  return (
    <div className="mt-8 flex flex-col border-b-2 min-h-screen justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
        Satisfied Customers
      </h1>
      <p className="m-4 text-center text-lg font-semibold py-4">
        At Nathkrupa Developers Ploting, our success is defined by the
        satisfaction of our customers
      </p>

      <div className="w-full max-h-1/2 ">
        <CustomerCarousel
          customers={[
            "v9zf9qtyomz8erhjbsdz",
            "oq7xu8plkxg9s8xglfqz",
            "usmwejvsji3aoan0hl4i",
            "qjycqkyxn5zjj3ausq9f",
            "kcwox0mhtykgojab5mvd",
            "bvhmksfdqomyuh8zcsdz",
            "baiea5fwhos494bt1ek6",
          ]}
        />
      </div>
    </div>
  );
};

export default Customers;
