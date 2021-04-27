import React from "react";
import "./AddImageBar.css";

const AddImageBar = ({ title, isProfile }) => {
  return (
    <div className="add-image-bar">
      <h2 style={{ fontWeight: "normal" }}>{title}</h2>
      {!isProfile && (
        <div>
          <span style={{ fontSize: "22px" }}>+</span> ADD
        </div>
      )}
    </div>
  );
};

export default AddImageBar;
