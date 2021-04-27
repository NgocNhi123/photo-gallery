import React from "react";
import "./ImageCardView.css";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify-icons/ant-design/heart-filled";

const ImageCardView = ({
  url,
  description,
  isFavorite,
  datetime,
  onClick,
  Children,
}) => {
  return (
    <article className="image-card-view">
      <div onClick={() => onClick()} className="close-button">
        x
      </div>
      <img src={url} alt="" className="resize-card" />
      <div className="card-view-body">
        {datetime}
        <Icon
          icon={heartFilled}
          className={isFavorite ? "heartIcon isFavorite" : "heartIcon"}
        />
      </div>
      <div>{description}</div>
      {Children}
    </article>
  );
};

export default ImageCardView;
