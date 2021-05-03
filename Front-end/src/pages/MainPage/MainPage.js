import React, { useState } from "react";
import "./MainPage.css";
import ImageGrid from "../../containers/ImageGrid/ImageGrid";
import Header from "../../containers/Header/Header";
import SideBar from "../../containers/SideBar/SideBar";
import AddImageBar from "../../containers/AddImageBar/AddImageBar";
import ImageCardView from "../../containers/ImageCardView/ImageCardView";
import CardViewContent from "../../components/CardViewContent/CardViewContent";
import AddingForm from "../../components/AddingForm/AddingForm";
import UserInfo from "../../containers/UserInfo/UserInfo";

const MainPage = () => {
  const [isSelected, setIsSelected] = useState("home");
  const [imageCardViewData, setImageCardViewData] = useState();
  const [isAddingImage, setIsAddingImage] = useState(false);

  return (
    <div className="container">
      {/* view an image's details */}
      {imageCardViewData && (
        <div className="pop-up">
          <ImageCardView onClick={setImageCardViewData}>
            <CardViewContent
              {...imageCardViewData}
              onClick={setImageCardViewData}
            />
          </ImageCardView>
        </div>
      )}

      {/* add a new image */}
      {isAddingImage && (
        <div className="pop-up">
          <ImageCardView onClick={setIsAddingImage}>
            <AddingForm onClick={setIsAddingImage} />
          </ImageCardView>
        </div>
      )}

      {/* side bar */}
      <SideBar className="side-bar" onClick={setIsSelected} />

      <div style={{ width: "100%" }}>
        {/* breadcrums and button add */}
        <Header />

        {/* main body */}
        {isSelected === "user" && (
          <div>
            <AddImageBar title={"User Profile"} isProfile={true} />
            <UserInfo />
          </div>
        )}
        {isSelected === "home" && (
          <div>
            <AddImageBar title={"All Images"} onClick={setIsAddingImage} />
            <ImageGrid onClick={setImageCardViewData} isSelected={isSelected} />
          </div>
        )}
        {isSelected === "favorite" && (
          <div>
            <AddImageBar title={"Favorite Images"} onClick={setIsAddingImage} />
            <ImageGrid onClick={setImageCardViewData} isSelected={isSelected} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
