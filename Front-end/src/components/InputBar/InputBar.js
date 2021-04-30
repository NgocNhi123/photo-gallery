import React from "react";
import "./InputBar.css";

const InputBar = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className="input-bar"
    />
  );
};

export default InputBar;
