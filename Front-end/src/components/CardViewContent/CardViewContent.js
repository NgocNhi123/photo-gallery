import React from "react";
import "./CardViewContent.css";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify-icons/ant-design/heart-filled";
import bxTrash from "@iconify-icons/bx/bx-trash";
import * as Commons from "../../commons/commons";

const CardViewContent = ({
  _id,
  path,
  caption,
  isFavorite,
  date,
  deleteAt,
}) => {
  return (
    <div>
      <img
        src={`${Commons.DOMAIN}${Commons.PORT}${path}`}
        alt={_id}
        className="resize-card"
      />
      <div className="card-view-body">
        <div className="row">
          <div>{date}</div>
          <div
            className={isFavorite ? "card-icon is-favorite" : "card-icon"}
            onClick={null}
          >
            <Icon icon={heartFilled} />
          </div>
        </div>
        <div className="row">
          <div>{caption}</div>
          <div className={"card-icon is-favorite"} onClick={null}>
            <Icon icon={bxTrash} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardViewContent;
