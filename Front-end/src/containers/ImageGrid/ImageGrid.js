import React, { useEffect, useState } from "react";
import SingleImage from "../../components/SingleImage/SingleImage";
import "./ImageGrid.css";
import * as Fetch from "../../utils/Fetch";
import * as Commons from "../../commons/commons";

const ImageGrid = ({ onClick, isSelected }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (isSelected === "home") {
        let data = await Fetch.GET(
          `${Commons.DOMAIN}${Commons.PORT}/getAllImage`
        );
        setImages(data.data.images);
      } else if (isSelected === "favorite") {
        let data = await Fetch.GET(
          `${Commons.DOMAIN}${Commons.PORT}/getAllFavorite`
        );
        setImages(data.data.images);
      }
    }

    fetchData();
  });

  return (
    <div className="grid-container">
      {images.map((image) => {
        return <SingleImage key={image._id} {...image} onClick={onClick} />;
      })}
    </div>
  );
};

export default ImageGrid;
