import React from "react";

const ResultCard = ({ items }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-80 relative group">
      
      <div className="h-full w-full overflow-hidden">
        
        {items.type === "photo" ? (
          <img
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={items.src}
            alt={items.title}
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            src={items.src}
          ></video>
        )}

      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-center">
        <h2 className="text-white text-sm font-medium line-clamp-2">
          {items.title}
        </h2>
        <button className="bg-orange-500 px-4 font-medium rounded text-white cursor-pointer">save</button>
      </div>

    </div>
  );
};

export default ResultCard;