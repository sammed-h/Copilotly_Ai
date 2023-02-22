import { useState } from "react";
import { PUBLIC_ASSETS_PATH } from "./Constants";
import "./SideBar.css";

const Sidebar = () => {
  const options = [
    {
      id: 1,
      label: "Active Jobs",
      icon: PUBLIC_ASSETS_PATH + "/user.png",
      count: 1,
    },
    {
      id: 2,
      label: "Draft Jobs",
      icon: PUBLIC_ASSETS_PATH + "/pencil.png",
      count: 3,
    },
    {
      id: 3,
      label: "Expired Jobs",
      icon: PUBLIC_ASSETS_PATH + "/forbidden.png",
      count: 15,
    },
  ];
  const [activeOption, setActiveOption] = useState(3);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const sumofCount = options.reduce((value, option) => value + option.count, 0);

  return (
    <div className="sideBarMain">
      <ul className="sidebar">
        <div className="userProfile">
          <img src={PUBLIC_ASSETS_PATH + "/userImg.jpg"} className="userImg" />
          <div>
            <label className="name">Jhon Smith </label>
            <label className="email">Jhonsmith23@gmail.com </label>
          </div>
        </div>
        <span className="Label"> All Jobs ({sumofCount})</span>
        {options.map((option) => (
          <li
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className={option.id === activeOption ? "active" : ""}
          >
            <img src={option.icon} className="optionIcon" /> {option.label} (
            {option.count})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
