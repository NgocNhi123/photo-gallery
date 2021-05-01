import React from "react";
import "./SideBar.css";
import IconButtons from "../../components/IconButtons/IconsButtons";

const SideBar = ({ onClick }) => {
  return (
    <div className="side-bar">
      <IconButtons type="user" onClick={() => onClick("user")} />
      <IconButtons type="home" onClick={() => onClick("home")} />
      <IconButtons type="favorite" onClick={() => onClick("favorite")} />
    </div>
  );
};

export default SideBar;
