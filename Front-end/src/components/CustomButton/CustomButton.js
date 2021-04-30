import React from "react";
import "./CustomButton.css";

const CustomButton = ({ onClick, value, children }) => {
  return (
    <>
      {value !== null && (
        <div onClick={() => onClick(value)} className="custom-button">
          {children}
        </div>
      )}
      {value === null && (
        <div onClick={onClick} className="custom-button">
          {children}
        </div>
      )}
    </>
  );
};

export default CustomButton;
