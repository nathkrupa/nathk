import React from "react";
import { cloudinary_url } from "../utils/constants";

const About = () => {
  return (
    <div className="flex flex-col items-center border-b-2">
      <h1 className="text-4xl  md:text-6xl font-serif font-bold text-center">
        About Us
      </h1>
      <p className="m-4 md:w-1/2 text-center text-lg font-semibold">
        “Success is not just about making deals; it&#39;s about building
        relationships, creating value, and leaving a lasting legacy.”
      </p>
      <div className="md:flex my-4 p-4 gap-6 w-10/12">
        <img
          src={`${cloudinary_url}keoreestm929mzkt0gdb`}
          alt="about"
          className="md:h-96 md:w-1/2 shadow-lg"
        />
        <p className="p-4  text-lg md:w-1/2">
          <>
            Welcome to Nathkrupa Developers Ploting, where visionary planning
            meets unparalleled execution. Founded by esteemed businessmen
            Swapnil Pawar and Eshwar Budhawant, our company stands as a beacon
            of excellence in the real estate industry. With a steadfast
            commitment to integrity, quality, and innovation, we specialize in
            crafting exceptional plots in prime locations such as Kharadi,
            Awalwadi, and Wagoli. Backed by a legacy of success and a passion
            for exceeding expectations, we invite you to embark on your journey
            towards finding the perfect plot with us.
            <br />
            Backed by a team of seasoned professionals.
          </>
        </p>
      </div>
    </div>
  );
};

export default About;
