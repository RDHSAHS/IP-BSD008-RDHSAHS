import React from "react";

const ModalThanks = ({ isOpen, onClose, message }) => {
  return (
    isOpen && (
      <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="modal-content bg-white p-8 max-w-md rounded-lg text-black">
          <p className="text-xl">{message}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default ModalThanks;
