import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { cloudinary_url } from "../utils/constants";

export function ImagesDial({ projectImages }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Show Images</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Images</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-5 p-4 ">
              {projectImages &&
                projectImages.map((img, index) => (
                  <img
                    key={index}
                    src={`${cloudinary_url}${img}`}
                    alt={`sectionOne-${index}`}
                    className="shadow-lg  "
                  />
                ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
