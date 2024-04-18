import { Carousel } from "flowbite-react";
import { cloudinary_url } from "../utils/constants";

export function SpecialAttractions({ imageSectionOne, imageSectionTwo }) {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {imageSectionOne &&
          imageSectionOne.map((img, index) => (
            <div>
              <img
                key={index}
                src={`${cloudinary_url}${img}`}
                alt={`sectionOne-${index}`}
                className="w-80"
              />
            </div>
          ))}
      </Carousel>
      <Carousel indicators={false}>
        {imageSectionTwo &&
          imageSectionTwo.map((img, index) => (
            <img
              key={index}
              src={`${cloudinary_url}${img}`}
              alt={`sectionTwo-${index}`} // Corrected the alt attribute to use "sectionTwo"
              className="w-80"
            />
          ))}
      </Carousel>
    </div>
  );
}
