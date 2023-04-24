import { API_GATEWAY, COLORS } from "../../utils/constants";

import React, { useState } from "react";
import Modal from "../Modal/Modal";

export type Work = {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    price: number | null;
    images: { data: any[] };
  };
};

const ListView = ({ data }) => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  return (
    <div className="w-full p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16">
      {data.map((item: Work, index: number) => (
        <div
          key={index}
          role="button"
          onClick={() => {
            setSelectedWork(item);
          }}
          className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
          style={{ backgroundColor: COLORS.white }}>
          <img
            className="object-cover w-full h-80"
            src={`https://${import.meta.env.PUBLIC_BACKEND_URL}${
              item.attributes.images.data[0].attributes.url
            }`}
            alt=""
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {item.attributes.title}
            </div>
            <div className="overflow-hidden">
              <p className="text-gray-700 h-6 text-base truncate">
                {item.attributes.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      {selectedWork && (
        <Modal
          onClose={() => setSelectedWork(null)}
          selectedItem={selectedWork}
        />
      )}
    </div>
  );
};

export default ListView;
