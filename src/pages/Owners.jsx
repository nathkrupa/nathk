import React, { useEffect, useState } from "react";
import { cloudinary_url } from "../utils/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Owners = () => {
  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv % 3) + 1); // Cycle through divs 1, 2, 3
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex flex-col justify-center items-center border-b-2 min-h-screen">
      <h1 className="text-4xl  md:text-6xl font-serif font-bold text-center">
        Owners
      </h1>
      <p className="m-4 text-center  text-lg font-semibold py-4">
        Meet the Visionaries Behind Nathkrupa Developers Ploting: Swapnil Pawar
        and Eshwar Budhwant.
      </p>

      {currentDiv === 1 && (
        <div className="md:flex justify-center gap-5 my-4 p-4 w-10/12 text-center">
          <div className="md:flex justify-center items-center gap-5 my-4 p-4">
            <img
              src={`${cloudinary_url}hwazyrdwzpmfqdcmvubp`}
              alt="owners"
              className=" md:w-80  shadow-lg"
            />
            <p className="py-4 px-4 w-full  text-lg md:w-1/2">
              <>
                Swapnil Pawar, a dynamic entrepreneur with a keen eye for
                innovation, brings years of expertise in real estate development
                to the helm of Nathkrupa Developers Ploting. His visionary
                leadership and strategic acumen have been instrumental in
                driving the company&#39;s growth and success.
                <br />
                Eshwar Budhawant, a seasoned businessman renowned for his
                integrity and dedication, co-founds Nathkrupa Developers Ploting
                with a passion for excellence. With a wealth of experience in
                the real estate sector, he ensures that every project reflects
                the highest standards of quality and craftsmanship.
                <br />
                Together, Swapnil and Eshwar form an unstoppable duo, united by
                a shared commitment to customer satisfaction and a relentless
                pursuit of excellence.{" "}
              </>
            </p>
          </div>{" "}
        </div>
      )}

      {/* div 2 */}
      {currentDiv === 2 && (
        <div className="md:flex justify-center items-center gap-5 my-4 p-4 w-10/12 text-center">
          <div className="md:flex justify-center gap-5 my-4 p-4 ">
            <img
              src={`${cloudinary_url}rwxfhtp9mcuvfhsjf3bq`}
              alt="owners"
              className=" md:w-80  shadow-lg"
            />
            <div className="w-full  md:w-1/2">
              <h1 className="text-4xl font-serif font-semibold py-2">
                Eshwar Budhawant
              </h1>
              <p className="py-4 px-4  text-lg ">
                <>
                  With a rich background in business and a deep-rooted passion
                  for real estate, Eshwar brings invaluable expertise and
                  insight to the company. during which he has established
                  himself as a respected figure known for his integrity,
                  dedication, and commitment to excellence. Eshwar's vision for
                  Nathkrupa Developers Ploting is rooted in a steadfast belief
                  in quality, innovation, and customer satisfaction.
                </>
              </p>
              <div className="flex gap-4 justify-center">
                <Facebook className="text-purple-600  cursor-pointer " />
                <a
                  href="https://www.instagram.com/swapnil_pawar_9?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="text-purple-600 cursor-pointer " />
                </a>
                <Twitter className="text-purple-600   cursor-pointer  " />
              </div>
            </div>
          </div>{" "}
        </div>
      )}

      {currentDiv === 3 && (
        <div className="md:flex justify-center gap-5 my-4 p-4 w-10/12 text-center ">
          <div className="md:flex justify-center gap-5 my-4 p-4 ">
            <img
              src={`${cloudinary_url}sd43rwddh0cwqqwhkbsp`}
              alt="owners"
              className=" md:w-80  shadow-lg"
            />
            <div className=" w-full md:w-1/2 ">
              <h1 className="text-4xl font-serif font-semibold py-2 text-center">
                Swapnil Pawar{" "}
              </h1>
              <p className="py-4 px-4  text-lg">
                <>
                  Swapnil is a seasoned entrepreneur with a remarkable track
                  record in the real estate industry. With a passion for
                  innovation and a relentless pursuit of excellence, he has
                  successfully navigated the complexities of the market, earning
                  a reputation for visionary leadership and strategic foresight.
                  With years of experience in real estate development, Swapnil
                  possesses a keen understanding of market dynamics and consumer
                  trends.
                </>
              </p>
              <div className="flex gap-4 justify-center">
                <Facebook className="text-purple-600  cursor-pointer " />
                <Instagram className="text-purple-600 cursor-pointer " />
                <Twitter className="text-purple-600   cursor-pointer  " />
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Owners;
