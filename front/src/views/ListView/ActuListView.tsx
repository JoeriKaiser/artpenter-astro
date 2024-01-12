import { COLORS } from "../../utils/constants";

import { useState } from "react";
import ActuModal from "@views/Modal/ActuModal";

export type Actu = {
  id: number;
  attributes: {
    title: string;
    excerpt: string;
    date: string;
    auteur: string;
    tags: string;
    thumbnail: { data: any[] };
  };
};

const ActuListView = ({ data }) => {
  const [selectedWork, setSelectedWork] = useState<Actu | null>(null);
  return (
    <div className="w-full p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16">
      {data.map((item: Actu, index: number) => (
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
              item.attributes.thumbnail.data[0].attributes.url
            }`}
            alt=""
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {item.attributes.title}
            </div>
            <div className="overflow-hidden">
              <p className="text-gray-700 h-6 text-base truncate">
                {item.attributes.excerpt}
              </p>
            </div>
          </div>
        </div>
      ))}
      {selectedWork && (
        <ActuModal
          onClose={() => setSelectedWork(null)}
          selectedItem={selectedWork}
        />
      )}
    </div>
  );
};

export default ActuListView;
