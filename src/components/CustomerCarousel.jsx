import React from "react";
import { cloudinary_url } from "../utils/constants";

const CustomerCarousel = ({ customers }) => {
  // Duplicate the array to ensure smooth looping
  const duplicatedCustomers = [
    ...customers,
    ...customers,
    ...customers,
    ...customers,
    ...customers,
  ];

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex md:space-x-4 animate-loop-scroll "
        style={{ width: `${duplicatedCustomers.length + 20 * 100}%` }}
      >
        {duplicatedCustomers.map((customer, index) => (
          <div className="">
            <img
              key={index}
              src={`${cloudinary_url}${customer}`}
              alt={customer}
              className=" p-2 md:p-4 shadow-md w-52  md:w-96"
              style={{ minWidth: `${100 / duplicatedCustomers.length}%` }}

              // style={{ minWidth: "100%", minHeight: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerCarousel;

// import React, { useState, useEffect } from "react";
// import { cloudinary_url } from "../utils/constants";

// const CustomerCarousel = ({ customers }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) =>
//         prevSlide === customers.length - 1 ? 0 : prevSlide + 1
//       );
//     }, 2000); // Change slide every 2 seconds

//     return () => clearInterval(interval);
//   }, [customers.length]);

//   return (
//     <div className="relative overflow-hidden">
//       <div
//         className="flex transition-transform duration-1000 ease-in-out"
//         style={{
//           transform: `translateX(-${
//             (currentSlide % customers.length) * (100 / customers.length)
//           }%)`,
//         }}
//       >
//         {customers.map((customer, index) => (
//           <img
//             key={index}
//             src={`${cloudinary_url}${customer}`}
//             alt={`customer ${index}`}
//             className="p-2 md:p-4 shadow-md h-64 md:h-80 max-w-full"
//           />
//         ))}
//         {/* Render images again to create a loop */}
//         {customers.map((customer, index) => (
//           <img
//             key={customers.length + index}
//             src={`${cloudinary_url}${customer}`}
//             alt={`customer ${index}`}
//             className="p-2 md:p-4 shadow-md h-64 md:h-80 max-w-full"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomerCarousel;
