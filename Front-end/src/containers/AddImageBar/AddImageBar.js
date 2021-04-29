import React from "react";
import "./AddImageBar.css";

const AddImageBar = ({ title, isProfile, onClick }) => {
  return (
    <div className="add-image-bar">
      <h2 style={{ fontWeight: "normal" }}>{title}</h2>
      {!isProfile && (
        <div onClick={() => onClick(true)}>
          <span style={{ fontSize: "22px" }}>+</span> ADD
        </div>
      )}
    </div>
  );
};

export default AddImageBar;
