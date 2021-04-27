import React, { useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ImageGrid from "./screens/ImageGrid/ImageGrid";
import Header from "./screens/Header/Header";
import SideBar from "./screens/SideBar/SideBar";
import AddImageBar from "./components/AddImageBar/AddImageBar";

function App() {
  const [isSelected, setIsSelected] = useState("home");

  return (
    <div className="container">
      <SideBar className="side-bar" onClick={setIsSelected} />
      <div>
        <Header />
        {isSelected === "user" && (
          <AddImageBar title={"Profile"} isProfile={true} />
        )}
        {isSelected === "home" && <AddImageBar title={"All image"} />}
        {isSelected === "album" && <AddImageBar title={"Album"} />}
        {isSelected === "favorite" && <AddImageBar title={"Favorite image"} />}
        {isSelected !== "user" && <ImageGrid />}
      </div>
    </div>
  );
}

export default App;
