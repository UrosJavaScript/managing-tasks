import React, { useEffect } from "react";
import { ModalProps } from "./Modal.types";
import Button from "../button";
import { images } from "../../layout/assets";

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  isOpen,
  onClose,
  onConfirm,
  mode,
  confirmDisabled = false,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-[32px] shadow-lg w-11/12 md:w-1/2 p-8 relative flex flex-col">
        <div className="flex items-center gap-3">
          <span className="bg-[#F3F4F8] p-4 rounded-[40px]">
            <img src={images.pencilIcon} alt={title} />
          </span>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>

        {mode === "create" && (
          <p className=" pt-6 pb-10 text-[#434346] font-normal	 text-sm max-md:text-center">
            Please provide the required details to create the task.
          </p>
        )}

        {mode === "delete" ? (
          <p className="flex py-6 text-colorDark font-bold text-base justify-center max-md:text-center">
            Are you sure you want to delete this task?
          </p>
        ) : (
          <div className="mb-3">{content}</div>
        )}

        <Button
          onClick={onConfirm}
          label={
            (mode === "create" && "Create task") ||
            (mode === "edit" && "Edit task") ||
            (mode === "delete" && "Delete task")
          }
          className={`${
            mode === "delete" ? "bg-colorRed" : "bg-primaryBlue"
          }  text-white px-4 py-2 rounded-xl font-bold w-full hover:bg-violet-600 ease-in-out duration-500 ${confirmDisabled && 'opacity-35'}`}
          disabled={confirmDisabled}
        />
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-primaryBlue text-4xl"
          onClick={handleClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
