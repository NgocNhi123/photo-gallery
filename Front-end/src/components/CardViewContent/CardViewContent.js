import React from "react";
import "./CardViewContent.css";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify-icons/ant-design/heart-filled";

const CardViewContent = ({ url, description, isFavorite, datetime }) => {
  return (
    <div>
      <img src={url} alt="" className="resize-card" />
      <div className="card-view-body">
        {datetime}
        <Icon
          icon={heartFilled}
          className={isFavorite ? "heartIcon isFavorite" : "heartIcon"}
        />
      </div>
      <div>{description}</div>
    </div>
  );
};

export default CardViewContent;
