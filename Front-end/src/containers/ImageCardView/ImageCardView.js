import React from "react";
import "./ImageCardView.css";

const ImageCardView = ({ onClick, children }) => {
  return (
    <article className="image-card-view">
      <div onClick={() => onClick()} className="close-button">
        x
      </div>
      {children}
    </article>
  );
};

export default ImageCardView;
