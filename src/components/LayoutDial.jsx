import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { cloudinary_url } from "../utils/constants";

export function LayoutDial() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        className="bg-white text-black rounded-none px-6 py-2 text-lg shadow-lg hover:bg-purple-600 hover:text-white"
        onClick={() => setOpenModal(true)}
      >
        Check Layout{" "}
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="space-y-6">
              <img
                src={`${cloudinary_url}${"p1vrdxuevul8x25qwfd6"}`}
                alt="layout"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
