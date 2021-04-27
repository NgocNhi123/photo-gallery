import React from "react";
import "./SingleImage.css";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify-icons/ant-design/heart-filled";

const SingleImage = ({ id, url, tags, datetime, isFavorite }) => {
  return (
    <article className="image-card">
      <img src={url} alt={id} className="resize" />
      <div className="card-body">
        {datetime}
        <div className={isFavorite ? `isFavo` : null}>
          <Icon icon={heartFilled} className="heart-icon" />
        </div>
      </div>
    </article>
  );
};

export default SingleImage;
