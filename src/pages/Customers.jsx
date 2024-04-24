import React from "react";
import { cloudinary_url } from "../utils/constants";
import ImageCarousel from "../components/ImageCarousel";
import CarouselTestimonial from "../components/CustomerCarousel";
import CustomerCarousel from "../components/CustomerCarousel";
import CarouselProject from "../components/CarouselProject";
import { ImagesDial } from "../components/ImagesDial";

const Customers = () => {
  return (
    <div className="mt-8 flex flex-col border-b-2 min-h-screen justify-center items-center ">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
        Satisfied Customers
      </h1>
      <p className="m-4 text-center text-lg font-semibold py-4">
        At Nathkrupa Developers Ploting, our success is defined by the
        satisfaction of our customers
      </p>

      <div className="relative w-screen">
        <CustomerCarousel
          customers={[
            "v9zf9qtyomz8erhjbsdz",
            "oq7xu8plkxg9s8xglfqz",
            "usmwejvsji3aoan0hl4i",
            "qjycqkyxn5zjj3ausq9f",
            "kcwox0mhtykgojab5mvd",
            "bvhmksfdqomyuh8zcsdz",
            "baiea5fwhos494bt1ek6",

            "jmdwewy6bwsfgrby4m1n",
            "nd1vcjacbipl8brh9rfw",
            "dq32gyhivdomcyk416yx",
            "gdits2kopmczidqdofpq",
            "kxolmuvncev4nbc0cexc",
            "i9pup3up9yjtwg7spl1b",
            "ysfoc0ydli7pmlsybc8h",
            "ln6qbeyele0wajcmp34v",
            "hhzpr9voovxblr603w20",
            "n3coiijssjg03kvumjhn",
            "ddzxaebljknf1l05ysvm",
          ]}
        />
      </div>
      <div>
        <ImagesDial
          projectImages={[
            "v9zf9qtyomz8erhjbsdz",
            "oq7xu8plkxg9s8xglfqz",
            "usmwejvsji3aoan0hl4i",
            "qjycqkyxn5zjj3ausq9f",
            "kcwox0mhtykgojab5mvd",
            "bvhmksfdqomyuh8zcsdz",
            "baiea5fwhos494bt1ek6",

            "jmdwewy6bwsfgrby4m1n",
            "nd1vcjacbipl8brh9rfw",
            "dq32gyhivdomcyk416yx",
            "gdits2kopmczidqdofpq",
            "kxolmuvncev4nbc0cexc",
            "i9pup3up9yjtwg7spl1b",
            "ysfoc0ydli7pmlsybc8h",
            "ln6qbeyele0wajcmp34v",
            "hhzpr9voovxblr603w20",
            "n3coiijssjg03kvumjhn",
            "ddzxaebljknf1l05ysvm",
          ]}
        />
      </div>
    </div>
  );
};

export default Customers;
