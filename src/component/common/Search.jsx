import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(keyword);
      }}
      className="w-full p-2 rounded-sm border border-gray-200 flex gap-2 items-center"
    >
      <input
        type="text"
        className="w-full p-2 focus:outline-none "
        placeholder="masukkan keyword"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
