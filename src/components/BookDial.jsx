import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { cloudinary_url } from "../utils/constants";
import { Phone } from "lucide-react";
import GoogleMaps from "./GoogleMaps";

export function BookDial() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        className="px-8 py-4 font-semibold shadow-md m-4 bg-purple-600 text-white hover:shadow-xl"
        onClick={() => setOpenModal(true)}
      >
        Book Now{" "}
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="space-y-5 flex flex-col justify-center items-center">
            <h1 className=" text-3xl font-bold">Booking Information</h1>
            <p>Book at your Dream Investment</p>
            <h1 className="text-2xl font-bold ">Swapnil Pawar</h1>
            <div className="flex">
              <Phone className="text-purple-700" /> {"  "} 88888888
            </div>
            <p className="w-1/4 text-center">
              CITY VISTA Ashoka Nagar, Kharadi, Pune, Maharashtra 411014
            </p>

            <h1 className="text-lg font-semibold">Office Location</h1>
            <div className="w-3/4 h-40">
              {" "}
              <GoogleMaps />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
