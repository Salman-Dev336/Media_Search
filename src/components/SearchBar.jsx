import React, { useState } from "react";
import { setQuery } from "../redux/features/searchSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [text, settext] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));

    settext("");
  };

  return (
    <div className="w-full bg-black border-b border-gray-800 px-6 py-6 sticky top-0 z-50">
      
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="w-full flex items-center gap-4"
      >
        
        <input
          required
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          className="flex-1 bg-gray-900 text-white border border-gray-700 px-6 py-4 rounded-xl text-lg outline-none focus:border-white transition-all duration-300 placeholder:text-gray-500"
          type="text"
          placeholder="Search for photos, videos..."
        />

        <button
          className="bg-orange-500 text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition-all duration-300 active:scale-95 cursor-pointer"
        >
          Search
        </button>

      </form>

    </div>
  );
};

export default SearchBar;