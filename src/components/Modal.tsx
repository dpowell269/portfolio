import { type ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onModalClose: () => void;
  isModalOpen: boolean;
};

export default function Modal({
  children,
  onModalClose,
  isModalOpen,
}: ModalProps) {
  if (!isModalOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onModalClose}
    >
      <div className="bg-white p-[10px]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onModalClose}>x</button>
        {children}
      </div>
    </div>
  );
}
