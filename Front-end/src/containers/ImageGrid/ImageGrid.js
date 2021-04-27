import React from "react";
import SingleImage from "../../components/SingleImage/SingleImage";
import "./ImageGrid.css";

const ImageGrid = ({ images, onClick, isSelected }) => {
  return (
    <div className="grid-container">
      {images.map((image) => {
        if (isSelected === "favorite" && !image.isFavorite) return <></>;
        else return <SingleImage key={image.id} {...image} onClick={onClick} />;
      })}
    </div>
  );
};

export default ImageGrid;
