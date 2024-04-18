import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import GoogleMaps from "../components/GoogleMaps";
import { cloudinary_url } from "../utils/constants";
import CustomerCarousel from "../components/CustomerCarousel";
import Footer from "../components/Footer";
import { LayoutDial } from "../components/LayoutDial";
import { BookDial } from "../components/BookDial";
import { SpecialAttractions } from "../components/SpecialAttractions";

const ProjectDetail = ({
  sectionOneImg,
  sectionTwoImg,
  projectName,
  description,
  location,
  facalities,
  attractionSectionOne,
  attractionSectionTwo,
  customers,
  layoutImg,
}) => {
  const [currentSection, setCurrentSection] = useState("sectionOne");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) =>
        prevSection === "sectionOne" ? "sectionTwo" : "sectionOne"
      );
    }, 3000); // Switch sections every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center mt-48 min-h-screen ">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
            {projectName}{" "}
          </h1>
          <p className="m-4 text-center text-lg font-semibold py-4">
            {description}
          </p>
          {currentSection === "sectionOne" ? (
            <div className="grid grid-cols-3 gap-5 p-4 w-3/4">
              {sectionOneImg.map((img, index) => (
                <img
                  key={index}
                  src={`${cloudinary_url}${img}`}
                  alt={`sectionOne-${index}`}
                  className="shadow-lg   "
                />
              ))}
            </div>
          ) : (
            <div className="flex max-md:flex-wrap gap-5  w-3/4 justify-center items-center">
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
          <h1 className="text-2xl font-semibold p-4">{location} </h1>
          <div className="flex flex-wrap p-4 justify-center items-center ">
            <p
              className=" text-lg p-3 w-full md:w-1/3 "
              dangerouslySetInnerHTML={{ __html: facalities }}
            ></p>
            <div className="h-72 md:w-1/3 mb-4">
              {" "}
              <GoogleMaps />
            </div>
          </div>

          {/* special Attraction layout */}
          {/* <div className="w-1/2">
            {" "}
            {attractionSectionOne && (
              <SpecialAttractions
                imageSectionOne={attractionSectionOne}
                imageSectionTwo={attractionSectionTwo}
              />
            )}
          </div> */}

          <img src={`${cloudinary_url}wre9etdqnmd2mhoks5ir`} alt="amations" />

          <LayoutDial layoutImg={layoutImg} />

          <div className=" border-b-2">
            <img src={`${cloudinary_url}${layoutImg}`} alt="layout" />
          </div>

          {/* satisfied Customers */}

          <div className=" w-full flex flex-col justify-center items-center border-b-2">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-center py-6 ">
              Satisfied Customers
            </h1>

            <CustomerCarousel customers={customers} />

            <BookDial />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
