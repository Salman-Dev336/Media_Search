import React from "react";
import { useDispatch , useSelector} from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";
const Tabs = () => {
  const tabs = ["photos", "videos"];


  const dispatch = useDispatch();
  const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className="flex gap-10 p-10">
      {tabs.map(function (element, index) {
        return (
         
          <button
            className={`${(activeTab==element?'bg-orange-500':' bg-gray-600')} transition px-5 py-2 rounded-md uppercase cursor-pointer active:scale-95`}
            key={index}
            onClick={()=>{
                dispatch(setActiveTab(element))
            }}
          >
            {element}
          </button>
          
        );
      })}
    </div>
  );
};

export default Tabs;
