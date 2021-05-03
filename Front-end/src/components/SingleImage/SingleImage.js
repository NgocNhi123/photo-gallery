import React, { useState } from "react";
import "./SingleImage.css";
import { Icon } from "@iconify/react";
import heartFilled from "@iconify-icons/ant-design/heart-filled";
import bxTrash from "@iconify-icons/bx/bx-trash";
import * as Commons from "../../commons/commons";
import * as Fetch from "../../utils/Fetch";

const SingleImage = ({
  _id,
  path,
  date,
  isFavorite,
  caption,
  onClick,
  fetchData,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);

  async function setIsFavorite() {
    let data = await Fetch.POST(
      `${Commons.DOMAIN}${Commons.PORT}/setFavorite`,
      {
        id: _id,
        favorite: !favorite,
      }
    );
    if (data.data.valid) {
      setFavorite((prev) => !prev);
      fetchData();
    }
  }

  async function deleteImage() {
    let data = await Fetch.POST(`${Commons.DOMAIN}${Commons.PORT}/delete`, {
      id: _id,
    });
    if (data.data.valid) fetchData();
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
        <div onClick={setIsFavorite}>
          <Icon
            icon={heartFilled}
            className={favorite ? "heart-icon isFavo" : "heart-icon"}
          />
        </div>
        <div onClick={deleteImage}>
          <Icon icon={bxTrash} className={"heart-icon isFavo"} />
        </div>
      </div>
    </article>
  );
};

export default SingleImage;
