import React from "react";
import "./CardViewContent.css";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify-icons/ant-design/heart-filled";
import bxTrash from "@iconify-icons/bx/bx-trash";

const CardViewContent = ({ url, description, isFavorite, datetime }) => {
  return (
    <div>
      <img src={url} alt="" className="resize-card" />
      <div className="card-view-body">
        <div className="row">
          <div>{datetime}</div>
          <div
            className={isFavorite ? "card-icon is-favorite" : "card-icon"}
            onClick={null}
          >
            <Icon icon={heartFilled} />
          </div>
        </div>
        <div className="row">
          <div>{description}</div>
          <div className={"card-icon is-favorite"} onClick={null}>
            <Icon icon={bxTrash} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardViewContent;
