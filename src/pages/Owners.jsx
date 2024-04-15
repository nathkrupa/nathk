import React from "react";
import { cloudinary_url } from "../utils/constants";

const Owners = () => {
  return (
    <div className="mt-8 flex flex-col justify-center items-center border-b-2">
      <h1 className="text-4xl  md:text-6xl font-serif font-bold text-center">
        Owners{" "}
        <span className="bg-red-700 text-xl p-4 text-white">
          Under construction
        </span>
      </h1>
      <p className="m-4 text-center  text-lg font-semibold py-4">
        Meet the Visionaries Behind Nathkrupa Developers Ploting: Swapnil Pawar
        and Eshwar Budhwant.
      </p>
      <div className="md:flex justify-center gap-5 my-4 p-4 w-10/12">
        <img
          src={`${cloudinary_url}hwazyrdwzpmfqdcmvubp`}
          alt="owners"
          className=" md:w-1/4  shadow-lg"
        />
        <p className="p-4  text-lg md:w-4/6">
          <>
            Swapnil Pawar, a dynamic entrepreneur with a keen eye for
            innovation, brings years of expertise in real estate development to
            the helm of Nathkrupa Developers Ploting. His visionary leadership
            and strategic acumen have been instrumental in driving the
            company&#39;s growth and success.
            <br />
            Eshwar Budhawant, a seasoned businessman renowned for his integrity
            and dedication, co-founds Nathkrupa Developers Ploting with a
            passion for excellence. With a wealth of experience in the real
            estate sector, he ensures that every project reflects the highest
            standards of quality and craftsmanship.
            <br />
            Together, Swapnil and Eshwar form an unstoppable duo, united by a
            shared commitment to customer satisfaction and a relentless pursuit
            of excellence.{" "}
          </>
        </p>
      </div>
    </div>
  );
};

export default Owners;
