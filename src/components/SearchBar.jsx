import React from "react";
import { FaSearch } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter/dist/index";



function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 flex-grow max-w-md">
      <FaSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        className="w-full border-none outline-none bg-transparent"
        placeholder=""
      />
      <span className="text-gray-400">
        <Typewriter words={["Search 'Egg'", "Search 'Milk'", "Search 'Fruits'"]} loop={true} cursor />
      </span>
    </div>
  );
}

export default SearchBar;
