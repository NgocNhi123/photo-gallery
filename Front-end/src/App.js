import React, { useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ImageGrid from "./containers/ImageGrid/ImageGrid";
import Header from "./containers/Header/Header";
import SideBar from "./containers/SideBar/SideBar";
import AddImageBar from "./containers/AddImageBar/AddImageBar";
import ImageCardView from "./containers/ImageCardView/ImageCardView";
// import { GET, POST } from "../src/utils/Fetch";

function App() {
  const [isSelected, setIsSelected] = useState("home");
  const [imageCardViewData, setImageCardViewData] = useState();
  const images = [
    {
      id: 1,
      url:
        "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
      description: "nature",
      datetime: "20/12/2010",
      isFavorite: true,
    },
    {
      id: 2,
      url:
        "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
      description: "nature",
      datetime: "20/12/2010",
      isFavorite: true,
    },
    {
      id: 3,
      url:
        "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
      description: "nature",
      datetime: "20/12/2010",
      isFavorite: false,
    },
    {
      id: 4,
      url:
        "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
      description: "nature",
      datetime: "20/12/2010",
      isFavorite: false,
    },
  ];
  return (
    <div className="container">
      {imageCardViewData && (
        <div className="pop-up">
          <ImageCardView
            {...imageCardViewData}
            onClick={setImageCardViewData}
          />
        </div>
      )}
      <SideBar className="side-bar" onClick={setIsSelected} />
      <div style={{ width: "100%" }}>
        <Header />
        {isSelected === "user" && (
          <AddImageBar title={"User Profile"} isProfile={true} />
        )}
        {isSelected === "home" && <AddImageBar title={"All Images"} />}
        {isSelected === "favorite" && <AddImageBar title={"Favorite Images"} />}
        {isSelected !== "user" && (
          <ImageGrid
            onClick={setImageCardViewData}
            images={images}
            isSelected={isSelected}
          />
        )}
      </div>
    </div>
  );
}

export default App;
