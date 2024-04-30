import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import GoogleMaps from "../components/GoogleMaps";
import { cloudinary_url } from "../utils/constants";
import CustomerCarousel from "../components/CustomerCarousel";
import Footer from "../components/Footer";
import { LayoutDial } from "../components/LayoutDial";
import { BookDial } from "../components/BookDial";
import { SpecialAttractions } from "../components/SpecialAttractions";
import { ImagesDial } from "../components/ImagesDial";
import Glide from "@glidejs/glide";

const ProjectDetail = ({
  projectName,
  description,
  location,
  facalities,
  projectImages,
  customers,
  layoutImg,
  coverImg,
  map,
}) => {
  const [currentSection, setCurrentSection] = useState("sectionOne");
  const [isShowMoreAmations, setIsShowMoreAmations] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) =>
        prevSection === "sectionOne" ? "sectionTwo" : "sectionOne"
      );
    }, 3000); // Switch sections every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center flex-col m-4 text-center">
        <div className="flex flex-col justify-center items-center mt-48">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
            {projectName}{" "}
          </h1>
          <p className="m-4 text-center text-lg font-semibold py-4">
            {description}
          </p>

          <ImagesDial projectImages={projectImages} />
        </div>

        <div className="p-4 m-4 flex justify-center items-center">
          <img
            className="w-1/3 m-4"
            src={`${cloudinary_url}czuqu9athktvwtodkjjp`}
            alt="cover"
          />
          {coverImg && (
            <img
              className="w-1/3 m-4 "
              src={`${cloudinary_url}${coverImg}`}
              alt="cover2"
            />
          )}
        </div>

        <div>
          <img src={`${cloudinary_url}wre9etdqnmd2mhoks5ir`} alt="cover" />
        </div>
        {/* Project location and details */}
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-semibold p-4">{location} </h1>
          <div className="flex flex-wrap p-4 justify-center items-center ">
            <p
              className=" text-lg p-3 w-full md:w-1/3 text-left"
              dangerouslySetInnerHTML={{ __html: facalities }}
            ></p>
            <div className="h-72 md:w-1/3 mb-4 pl-4">{map}</div>
          </div>

          {/* special Attraction layout */}
          <div className="p-4 w-full md:w-1/2  border-t-2 border-b-2 flex flex-col justify-center text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold  py-6">
              {" "}
              Special Attractions
            </h1>

            <SpecialAttractions />
          </div>

          <img
            className="hidden md:block"
            src={`${cloudinary_url}wre9etdqnmd2mhoks5ir`}
            alt="amations"
          />

          <div className="max-md:flex flex-col hidden">
            <img
              src={`${cloudinary_url}x5nkiwflvteqy5msylc5`}
              alt="First Image"
              className=" max-w-full"
            />
            {isShowMoreAmations && (
              <img
                src={`${cloudinary_url}jhj41ojxcmhzc5vvjwzp`}
                alt="Second Image"
                className=" max-w-full"
              />
            )}
            {/** "Show More" button for toggling between images on mobile view */}
            <div className="flex justify-center my-4">
              <button
                onClick={() => {
                  setIsShowMoreAmations(!isShowMoreAmations);
                }}
                className=" w-fit px-4 py-2 mb-6 bg-purple-500 text-white "
              >
                {isShowMoreAmations ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>

          <div className="py-6 flex flex-col justify-center items-center  border-t-2">
            <LayoutDial layoutImg={layoutImg} />

            <div className=" border-b-2">
              <img src={`${cloudinary_url}${layoutImg}`} alt="layout" />
            </div>
          </div>

          {/* satisfied Customers */}

          <div className=" w-full flex flex-col justify-center items-center border-b-2">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-center py-6 ">
              Satisfied Customers
            </h1>
            <div className="realative w-screen">
              {" "}
              <CustomerCarousel customers={customers} />
            </div>
            <div className=" border-b-2 justify-center flex w-1/2  py-4">
              <ImagesDial projectImages={customers} />
            </div>

            <BookDial />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
