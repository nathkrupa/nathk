import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import GoogleMaps from "./GoogleMaps";

const Footer = () => {
  return (
    <div className="py-8  flex justify-center gap-20 items-center flex-wrap">
      <div>
        <div className="flex ">
          <img
            src="https://res.cloudinary.com/dvdrkucjh/image/upload/ujhd6oa8n0sgtbqlaggz"
            alt="logo"
            className="w-14 mx-5 object-cover"
          />
          <h1 className="text-2xl font-semibold my-8">Nathkrupa Developers</h1>
        </div>

        <div className="px-4 py-3 bg-white my-8 flex border border-gray-300 rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Message..."
            className="mx-4 px-8 py-2 outline-none border-none"
          />
          <button className="px-6 py-2 bg-purple-600 text-white p rounded-md">
            Submit{" "}
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-6 font-semibold">
            <h1 className="flex">
              <span>
                <MapPin className="text-purple-600 mr-4" />
              </span>
              XYZ
            </h1>
            <h1 className="flex">
              <span>
                <Phone className="text-purple-600 mr-4" />
              </span>
              +91-9822xxxx
            </h1>
          </div>

          <div className="flex gap-4">
            <Facebook className="text-purple-600" />
            <Instagram className="text-purple-600" />
            <Twitter className="text-purple-600" />
            <Linkedin className="text-purple-600" />
          </div>
        </div>
      </div>
      <div className="px-4 hidden md:flex flex-col">
        <h1 className="text-2xl font-semibold pb-10">Pages</h1>
        <ul className="flex flex-col gap-4 text-lg font-semibold">
          <li>About us</li>
          <li>Owners</li>
          <li>Projects</li>
          <li>Customers</li>
        </ul>
      </div>
      <div className="h-60 w-96">
        <h1 className="text-2xl font-semibold ">Office Location</h1>
        <GoogleMaps />
      </div>
    </div>
  );
};

export default Footer;
