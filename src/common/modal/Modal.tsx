import React from "react";
import { ModalProps } from "./Modal.types";
import Button from "../button";

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  isOpen,
  onClose,
  onConfirm,
  mode,
  task,
  handleChange,
  handlePriorityChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-[32px] shadow-lg w-11/12 md:w-1/3 p-6 relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">
          {content ? (
            content
          ) : mode === "delete" ? (
            <p>Are you sure you want to delete this task?</p>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={task?.title || ""}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={task?.description || ""}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Priority
                </label>
                <div className="flex space-x-4">
                  {["High", "Medium", "Low"].map((priority) => (
                    <label key={priority} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="priority"
                        value={priority}
                        checked={task?.priority === priority}
                        onChange={handlePriorityChange}
                        className="form-radio"
                      />
                      <span className="ml-2">{priority}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            onClick={onClose}
            label="Cancel"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          />
          <Button
            onClick={onConfirm}
            label={mode === "delete" ? "Delete" : "Save"}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          />
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
