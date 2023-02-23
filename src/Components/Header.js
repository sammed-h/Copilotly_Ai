import React from "react";
import { PUBLIC_ASSETS_PATH } from "./Constants";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="leftSide">
        <div className="leftSideFlex">
          <div className="phoneIcon">
            <img src={PUBLIC_ASSETS_PATH + "/telephone.png"} alt="" />
            <span>1(877)789-8767</span>
          </div>
          <div className="emailIcon">
            <img src={PUBLIC_ASSETS_PATH + "/email.png"} alt="" />
            <span>help@copilotly.com</span>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="rightSideFlex">
          <img
            src={PUBLIC_ASSETS_PATH + "/dollar.png"}
            className="rightsideIcon"
          />
          <img
            src={PUBLIC_ASSETS_PATH + "/document.png"}
            className="rightsideIcon"
          />
          <img
            src={PUBLIC_ASSETS_PATH + "/email.png"}
            className="rightsideIcon"
          />
          <img
            src={PUBLIC_ASSETS_PATH + "/bell.png"}
            className="rightsideIcon"
          />
          <img
            src={PUBLIC_ASSETS_PATH + "/settings.png"}
            className="rightsideIcon"
          />
          <img src={PUBLIC_ASSETS_PATH + "/mode.png"} className="modeIcon" />
          <img src={PUBLIC_ASSETS_PATH + "/exit.png"} className="exitIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
