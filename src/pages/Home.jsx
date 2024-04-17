import React from "react";

const Home = () => {
  return (
    <div className=" bg-[url(https://res.cloudinary.com/dvdrkucjh/image/upload/ac8i29p3jaq7e5y5we3j)] bg-cover bg-no-repeat mt-32 items-center self-stretch bg-gray-100 shadow-md">
      <div className="flex flex-col items-start gap-[35px] bg-gradient-to-t from-black to-transparent py-28 md:pl-28 pr-14 p-5 text-white">
        <h1 className="text-5xl md:text-8xl font-serif text-white font-semibold p-2">
          <>
            Nathkrupa Developers
            <br />
            Plotting
          </>
        </h1>
        <p className=" font-poppins text-lg md:w-1/2">
          Discover Your Dream Plot with Nathkrupa Developers Ploting – Where
          Quality Meets Affordability. Explore Prime Locations in Kharadi,
          Awalwadi, and Wagoli for Your Perfect Investment.
        </p>
        <button className="bg-white px-7 mb-28  py-4 text-black font-poppins font-semibold text-lg hover:bg-purple-600 hover:text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
