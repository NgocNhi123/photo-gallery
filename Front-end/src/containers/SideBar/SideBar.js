import React from "react";
import { useHistory } from "react-router-dom";
import "./SideBar.css";
import IconButtons from "../../components/IconButtons/IconsButtons";

const SideBar = ({ onClick }) => {
  const history = useHistory();
  return (
    <div className="side-bar">
      <IconButtons
        type="user"
        // onClick={() => {
        //   history.push("/home/user");
        // }}
        onClick={() => onClick("user")}
      />
      <IconButtons
        type="home"
        // onClick={() => {
        //   history.push("/home/all");
        // }}
        onClick={() => onClick("home")}
      />
      <IconButtons
        type="favorite"
        // onClick={() => {
        //   history.push("/home/favorite");
        // }}
        onClick={() => onClick("favorite")}
      />
    </div>
  );
};

export default SideBar;
