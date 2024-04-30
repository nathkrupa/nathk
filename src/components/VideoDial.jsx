import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { cloudinary_url, cloudinary_video_url } from "../utils/constants";

export function VideoDial({ projectVideos }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Show Videos</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Videos</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-5 p-4">
              {projectVideos &&
                projectVideos.map((video, index) => (
                  <video
                    key={index}
                    src={`${cloudinary_video_url}${video}`}
                    alt={`sectionOne-${index}`}
                    className="shadow-lg"
                    controls // Add controls attribute to enable playback controls
                  />
                ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
