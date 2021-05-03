import React from "react";
import "./CardViewContent.css";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify-icons/ant-design/heart-filled";
import * as Commons from "../../commons/commons";

const CardViewContent = ({ _id, path, caption, isFavorite, date }) => {
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
          <div className={isFavorite ? "card-icon is-favorite" : "card-icon"}>
            <Icon icon={heartFilled} />
          </div>
        </div>
        <div className="row">{caption}</div>
      </div>
    </div>
  );
};

export default CardViewContent;
