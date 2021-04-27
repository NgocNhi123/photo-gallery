import React from "react";
import "./SingleImage.css";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify-icons/ant-design/heart-filled";

const SingleImage = ({
  id,
  description,
  url,
  datetime,
  isFavorite,
  onClick,
}) => {
  return (
    <article
      className="image-card"
      onClick={() => onClick({ id, url, datetime, isFavorite, description })}
    >
      <img src={url} alt={id} className="resize" />
      <div className="card-body">
        {datetime}
        <Icon
          icon={heartFilled}
          className={isFavorite ? "heart-icon isFavo" : "heart-icon"}
        />
      </div>
    </article>
  );
};

export default SingleImage;
