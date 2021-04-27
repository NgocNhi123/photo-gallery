import React from "react";
import "./Header.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const header = () => {
  return (
    <div className="nav-bar sticky">
      <h1>Photo Gallery</h1>
      <SearchBar />
    </div>
  );
};

export default header;
