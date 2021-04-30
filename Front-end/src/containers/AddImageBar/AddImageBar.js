import React from "react";
import "./AddImageBar.css";
import CustomButton from "../../components/CustomButton/CustomButton";

const AddImageBar = ({ title, isProfile, onClick }) => {
  return (
    <div className="add-image-bar">
      <h2 style={{ fontWeight: "normal" }}>{title}</h2>
      {!isProfile && (
        <CustomButton onClick={onClick} value={true}>
          <span style={{ fontSize: "22px" }}>+</span> ADD
        </CustomButton>
      )}
    </div>
  );
};

export default AddImageBar;
