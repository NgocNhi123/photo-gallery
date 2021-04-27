import React from "react";
import "./SideBar.css";
import IconButtons from "../../components/IconButtons/IconsButtons";

const SideBar = ({ onClick }) => {
  return (
    <div className="side-bar">
      <IconButtons type="user" onClick={onClick} />
      <IconButtons type="home" onClick={onClick} />
      <IconButtons type="favorite" onClick={onClick} />
    </div>
  );
};

export default SideBar;
