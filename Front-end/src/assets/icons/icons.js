import React from "react";
import "./icons.css";
import { Icon } from "@iconify/react";
import bxsPhotoAlbum from "@iconify-icons/bx/bxs-photo-album";
import bxsUserCircle from "@iconify-icons/bx/bxs-user-circle";
import homeFilled from "@iconify-icons/ant-design/home-filled";
import heartFilled from "@iconify-icons/ant-design/heart-filled";

const UserIcons = () => {
  return <Icon icon={bxsUserCircle} className="sidebarIcon" />;
};

const AlbumIcons = () => {
  return <Icon icon={bxsPhotoAlbum} className="sidebarIcon" />;
};

const HomeIcons = () => {
  return <Icon icon={homeFilled} className="sidebarIcon" />;
};

const HeartIcons = () => {
  return <Icon icon={heartFilled} className="sidebarIcon" />;
};

export { UserIcons, AlbumIcons, HomeIcons, HeartIcons };
