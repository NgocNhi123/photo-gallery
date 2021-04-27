import "./IconButtons.css";
import {
  UserIcons,
  AlbumIcons,
  HomeIcons,
  HeartIcons,
} from "../../assets/icons/icons";

const IconButtons = ({ type, onClick }) => {
  function getIcon(type) {
    if (type === "user") return <UserIcons />;
    else if (type === "album") return <AlbumIcons />;
    else if (type === "favorite") return <HeartIcons />;
    else return <HomeIcons />;
  }
  return <button onClick={() => onClick(type)}>{getIcon(type)}</button>;
};

export default IconButtons;
