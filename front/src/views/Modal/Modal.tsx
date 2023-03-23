import React, { useState } from "react";
import { API_GATEWAY } from "../../utils/constants";
import { Work } from "../ListView/ListView";
import "./styles.css";

type Props = {
  selectedItem: Work;
  onClose: () => void;
};

const Modal = ({ selectedItem, onClose }: Props) => {
  const [index, setIndex] = useState(0);

  const images = selectedItem.attributes.images.data;

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto modalBackground px-5`}
      onClick={() => onClose}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white w-full max-w-xl mx-auto rounded-md shadow-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="flex justify-end">
              <button onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="my-6 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h2 className="text-xl font-bold leading-6 text-gray-900">
                {selectedItem.attributes.title}
              </h2>
              <div className="mt-2">{selectedItem.attributes.description}</div>
            </div>
            <div className="mt-2">
              <img
                src={`${API_GATEWAY}${images[index].attributes.url}`}
                alt=""
              />
              <div className="flex justify-between mt-4">
                <button
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                  onClick={handlePrev}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="ml-4 text-gray-500 hover:text-gray-800 transition-colors duration-300"
                  onClick={handleNext}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
