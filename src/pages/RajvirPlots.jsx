import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import GoogleMaps from "../components/GoogleMaps";
import { cloudinary_url } from "../utils/constants";
import CustomerCarousel from "../components/CustomerCarousel";
import Footer from "../components/Footer";
import { LayoutDial } from "../components/LayoutDial";
import { BookDial } from "../components/BookDial";

const RajvirPlots = () => {
  const [currentSection, setCurrentSection] = useState("sectionOne");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) =>
        prevSection === "sectionOne" ? "sectionTwo" : "sectionOne"
      );
    }, 3000); // Switch sections every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const sectionOneImg = [
    "yxdghzrpwhgrsbygvxfl",
    "s0vbzdosfpuualrgouuh",
    "lvxmq301htsuk6blwldb",
    "z0g5kixzgybv6hhpook4",
  ];

  const sectionTwoImg = [
    "rt8p89nosc91rzoovkts",
    "m4jdq7mkjczm7rn3mhkb",
    "lwyck6yftmdjfkhtihqi",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center mt-48">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
            Rajvir Plots
            <span className="bg-red-700 text-xl p-4 text-white">
              Under construction
            </span>
          </h1>
          <p className="m-4 text-center text-lg font-semibold py-4">
            Discover Tranquil Living at Rajvir Plots – Where Serenity Meets
            Convenience.
          </p>
          {currentSection === "sectionOne" ? (
            <div className="grid grid-cols-2 gap-5 p-4 w-3/4">
              {sectionOneImg.map((img, index) => (
                <img
                  key={index}
                  src={`${cloudinary_url}${img}`}
                  alt={`sectionOne-${index}`}
                />
              ))}
            </div>
          ) : (
            <div className="flex gap-5 p-4 w-3/4 justify-center items-center">
              {sectionTwoImg.map((img, index) => (
                <img
                  key={index}
                  src={`${cloudinary_url}${img}`}
                  alt={`sectionTwo-${index}`}
                />
              ))}
            </div>
          )}{" "}
        </div>
        {/* Project location and details */}
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-2xl font-semibold p-4">
            Location: Awalwadi Road, near BIOVET PRIVATE LIMITED
          </h1>
          <div className="flex justify-center items-center ">
            <p className=" text-lg p-3 w-full md:w-1/3 ">
              Rajvir Plots offers a unique opportunity to own a piece of prime
              real estate in the vibrant locale of Awalwadi Road. Nestled in
              close proximity to BIOVET PRIVATE LIMITED, this meticulously
              planned project boasts of spacious plots surrounded by lush
              greenery and scenic views.
              <span>
                <ul className="list-disc p-4">
                  <li>Health Facilities in 3 Mins</li>
                  <li>IT and Workspaces in 100 meters</li>
                  <li>Education Institutes in 1 Mins</li>
                  <li>Pune Airport 10 Mins</li>
                  <li>Entertainment and malls 10 Mins</li>
                </ul>
              </span>
            </p>
            <div className="h-72 w-1/3">
              {" "}
              <GoogleMaps />
            </div>
          </div>

          <img
            src={`${cloudinary_url}${"wre9etdqnmd2mhoks5ir"}`}
            alt="amations"
          />

          <LayoutDial />

          <div className="min-h-screen border-b-2">
            <img
              src={`${cloudinary_url}${"p1vrdxuevul8x25qwfd6"}`}
              alt="layout"
            />
          </div>

          {/* satisfied Customers */}

          <div className="min-h-screen w-full flex flex-col justify-center items-center border-b-2">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-center py-6 ">
              Satisfied Customers
            </h1>

            <CustomerCarousel
              customers={[
                "v9zf9qtyomz8erhjbsdz",
                "oq7xu8plkxg9s8xglfqz",
                "usmwejvsji3aoan0hl4i",
              ]}
            />

            <button className="px-8 py-4 font-semibold shadow-md m-4 bg-purple-600 text-white hover:shadow-xl">
              Book Now
            </button>

            <BookDial />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RajvirPlots;
