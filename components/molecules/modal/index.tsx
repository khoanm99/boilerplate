'use client';

import { useListenEscape } from "@/hooks/useListenEscape";
import clsx from "clsx";
import { ReactNode, useRef } from "react";
import ReactDOM from "react-dom";
import { useIsClient, useOnClickOutside, useScrollLock } from "usehooks-ts";

export interface ModalWrapperProps {
  isOpen: boolean;
  children: ReactNode;
  closeModal?: () => void;
  animationType?: "fade-in";
  bgColor?: "black";
}

const ModalWrapper = ({
  children,
  isOpen = false,
  closeModal,
  animationType,
  bgColor,
}: ModalWrapperProps) => {
  const refContainer = useRef<HTMLDivElement>(null);
  useOnClickOutside(
    refContainer,
    () => closeModal && isOpen === true && closeModal()
  );

  useScrollLock({
    autoLock: isOpen,
  });

  const handleEscapeKey = () => {
    closeModal && closeModal();
  };

  useListenEscape({
    action: () => {
      const activeElement = document.activeElement;
      // Todo: add condition here when have multiple things
      const isInComponent = true;
      if (isInComponent) {
        handleEscapeKey && handleEscapeKey();
      }
    },
    dependencyArray: [],
  });

  const isClient = useIsClient();
  if (!isClient) return;

  const element = document.querySelector("body");
  if (!element) return;

  return ReactDOM.createPortal(
    <div
      className={clsx(
        "fixed z-[21] inset-0 overflow-x-hidden",
        animationType && "transition-[opacity]",
        !animationType && !isOpen && "hidden",
        animationType === "fade-in" &&
          !isOpen &&
          "invisible opacity-0 pointer-events-none",
        animationType === "fade-in" && isOpen && "visible opacity-100"
      )}
    >
      <div
        className={clsx(
          "flex flex-col min-h-full",
          bgColor == "black" && "bg-[#161616]/[0.77]"
        )}
      >
        <div
          className="flex w-full flex-col justify-center h-full flex-auto"
          ref={refContainer}
        >
          {children}
          <div tabIndex={0} className="helper-trap" />
        </div>
      </div>
    </div>,
    element
  );
};

export default ModalWrapper;