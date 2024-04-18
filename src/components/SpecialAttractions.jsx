import { Carousel } from "flowbite-react";
import { cloudinary_url } from "../utils/constants";

export function SpecialAttractions() {
  const SpecialAttractionsImages = [
    "jwfnbli8gocvlwplknsf",
    "p470i2cenuzrhccwszxp",
    "gyzpp1zfaplkoiaxssy9",
    "e2nnxavvrzyzvuvwfjyi",
    "bcwoh6kw89xuq2bmwhpz",
    "d20li7xik3xe5ezymubx",
  ];
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel slideInterval={2000}>
        {SpecialAttractionsImages &&
          SpecialAttractionsImages.map((img, index) => (
            <div>
              <img
                key={index}
                src={`${cloudinary_url}${img}`}
                alt={`${index}`}
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
