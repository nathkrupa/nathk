import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import { cloudinary_url } from "../utils/constants";

export default function CustomerCarousel() {
  const [totalSlides, setTotalSlides] = useState(0);
  const images = [
    "v9zf9qtyomz8erhjbsdz",
    "oq7xu8plkxg9s8xglfqz",
    "usmwejvsji3aoan0hl4i",
    "qjycqkyxn5zjj3ausq9f",
    "kcwox0mhtykgojab5mvd",
    "bvhmksfdqomyuh8zcsdz",
    "baiea5fwhos494bt1ek6",
  ];

  useEffect(() => {
    setTotalSlides(images.length);
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-05 relative w-full">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {images.map((image, index) => (
              <li key={index}>
                <img
                  src={cloudinary_url + image}
                  className="m-auto max-h-full w-full max-w-full"
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className="group p-4"
              data-glide-dir={`=${index}`}
              aria-label={`goto slide ${index + 1}`}
            >
              <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
