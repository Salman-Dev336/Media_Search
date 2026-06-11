import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();

  const activeTab = useSelector(
    (state) => state.search.activeTab
  );

  return (
    <div className="w-full bg-black px-6 py-5 border-b border-gray-800">
      
      <div className="flex items-center gap-4">
        
        {tabs.map((element, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                dispatch(setActiveTab(element));
              }}
              className={`px-6 py-3 rounded-xl uppercase text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer active:scale-95 border
              
              ${
                activeTab === element
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-gray-900 text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {element}
            </button>
          );
        })}

      </div>

    </div>
  );
};

export default Tabs;