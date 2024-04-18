import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import GoogleMaps from "../components/GoogleMaps";
import { cloudinary_url } from "../utils/constants";
import CustomerCarousel from "../components/CustomerCarousel";
import Footer from "../components/Footer";
import { BookDial } from "../components/BookDial";
import { LayoutDial } from "../components/LayoutDial";

const YashPark = () => {
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
    "dzjucbikbmodcgbxz0wr",
    "p0mzhgplcuybp2zguxvb",
    "yjjxdtwvnhcywfpdstru",
    "rhq676e8mkhcmczli8fr",
  ];

  const sectionTwoImg = ["tx61nflwzajvhoneo3ij", "y7c5x5cx8rgnrdxbuzly"];
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center mt-48">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
            Yash Park Phase 7{" "}
            <span className="bg-red-700 text-xl p-4 text-white">
              Under construction
            </span>
          </h1>
          <p className="m-4 text-center text-lg font-semibold py-4">
            Discover Tranquil Living at Yash Park Phase 7 – Where Serenity Meets
            Convenience.
          </p>
          {currentSection === "sectionOne" ? (
            <div className="flex flex-wrap  gap-5 p-4  ">
              {sectionOneImg.map((img, index) => (
                <img
                  key={index}
                  src={`${cloudinary_url}${img}`}
                  alt={`sectionOne-${index}`}
                  className="shadow-lg w-36 md:w-60"
                />
              ))}
            </div>
          ) : (
            <div className="flex max-md:flex-wrap gap-5   justify-center items-center">
              {sectionTwoImg.map((img, index) => (
                <img
                  key={index}
                  src={`${cloudinary_url}${img}`}
                  alt={`sectionTwo-${index}`}
                  className="shadow-lg w-36 md:w-72 h-72"
                />
              ))}
            </div>
          )}{" "}
        </div>
        {/* Project location and details */}
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-semibold p-4">
            Location: Awalwadi Road, near BIOVET PRIVATE LIMITED
          </h1>
          <div className="flex flex-wrap p-4 justify-center items-center ">
            <p className=" text-lg p-3 w-full md:w-1/3 ">
              Yash Park, strategically positioned in the heart of Kharadi,
              offers an exceptional opportunity to own prime real estate in one
              of Pune's most coveted locations. Nestled in front of YOO Villas
              by Panchshil Towers and alongside Panchshil Towers, this
              meticulously planned project provides spacious plots surrounded by
              lush greenery and modern amenities.
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
            <div className="h-72 md:w-1/3 mb-4">
              {" "}
              <GoogleMaps />
            </div>
          </div>

          <img
            src={`${cloudinary_url}${"wre9etdqnmd2mhoks5ir"}`}
            alt="amations"
          />
          <LayoutDial />
          <div className=" border-b-2">
            <img
              src={`${cloudinary_url}${"p1vrdxuevul8x25qwfd6"}`}
              alt="layout"
            />
          </div>

          {/* satisfied Customers */}

          <div className="w-full flex flex-col justify-center items-center border-b-2">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-center py-6 ">
              Satisfied Customers
            </h1>

            <CustomerCarousel
              customers={[
                "nxssyh6mzqjorhgaoby2",
                "oq7xu8plkxg9s8xglfqz",
                "qjycqkyxn5zjj3ausq9f",
                "kcwox0mhtykgojab5mvd",
                "bvhmksfdqomyuh8zcsdz",
                "baiea5fwhos494bt1ek6",
              ]}
            />

            <BookDial />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default YashPark;
