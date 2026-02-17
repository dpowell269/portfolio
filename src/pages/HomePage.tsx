import { useState } from "react";

import main from "../assets/main.jpg";
import Image from "../components/Image";
import Modal from "../components/Modal";
import Counter from "../components/Counter";
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <Image source={main} alt="main banner image" />

      <div className="flex justify-center mt-[10px]">
        <button
          onClick={openModal}
          className="flex border rounded-lg p-[8px] hover:bg-yellow-500 ease-in duration-300"
        >
          Open modal
        </button>
        <Modal onModalClose={closeModal} isModalOpen={isModalOpen}>
          <h2>Modal headline</h2>
          <p>Modal description</p>
        </Modal>
      </div>
      <div className="flex justify-center mt-[20px]">
        <Counter />
      </div>
    </div>
  );
}
