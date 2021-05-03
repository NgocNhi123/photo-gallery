import React from "react";
import "./Header.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const header = ({ onChange }) => {
  return (
    <div className="nav-bar sticky">
      <h1>Photo Gallery</h1>
      <SearchBar onChange={onChange} />
    </div>
  );
};

export default header;
