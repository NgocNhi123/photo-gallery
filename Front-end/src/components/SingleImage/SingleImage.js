import React, { useState } from "react";
import "./SingleImage.css";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify-icons/ant-design/heart-filled";
import * as Commons from "../../commons/commons";
import * as Fetch from "../../utils/Fetch";

const SingleImage = ({ _id, path, date, isFavorite, caption, onClick }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  async function setIsFavorite() {
    console.log(typeof _id);
    let data = await Fetch.POST(
      `${Commons.DOMAIN}${Commons.PORT}/setFavorite`,
      {
        id: _id,
        favorite: !favorite,
      }
    );
    console.log(data);
    if (data.data.valid) setFavorite((prev) => !prev);
  }
  return (
    <article className="image-card">
      <img
        src={`${Commons.DOMAIN}${Commons.PORT}${path}`}
        alt={_id}
        className="resize"
        onClick={() => onClick({ _id, path, date, isFavorite, caption })}
      />
      <div className="card-body">
        {date}
        <div onClick={setIsFavorite}>
          <Icon
            icon={heartFilled}
            className={favorite ? "heart-icon isFavo" : "heart-icon"}
          />
        </div>
      </div>
    </article>
  );
};

export default SingleImage;
