import React, { useState } from "react";
import { PUBLIC_API_GATEWAY } from "../../utils/constants";
import { Work } from "../ListView/ListView";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

type Props = {
  selectedItem: Work;
  onClose: () => void;
};

const Modal = ({ selectedItem, onClose }: Props) => {
  const images = selectedItem.attributes.images.data;
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
              <Carousel
                showThumbs={true}
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={true}
                centerMode={true}
                centerSlidePercentage={80}
                transitionTime={500}
                swipeable={true}
                dynamicHeight={false}>
                {images.map((image, index) => (
                  <div className="p-2" key={index}>
                    <img
                      src={`${PUBLIC_API_GATEWAY}${image.attributes.url}`}
                      alt=""
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
