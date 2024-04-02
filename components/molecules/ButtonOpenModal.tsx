"use client";

import { useState } from "react";
import DeliveryPopup from "./modal/delivery";

interface ButtonOpenModalProps {
  buttonText: string;
}

const ButtonOpenModal = ({ buttonText }: ButtonOpenModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={handleClick}>{buttonText}</button>
      <DeliveryPopup
        closeModal={closeModal}
        isOpen={isOpen}
        bgColor="black"
        animationType="fade-in"
      />
    </>
  );
};

export default ButtonOpenModal;
