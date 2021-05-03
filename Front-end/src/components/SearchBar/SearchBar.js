import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onChange }) => {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Search by description"
        className="search-input"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
