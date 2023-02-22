import { Button } from "antd";
import React from "react";
import Cards from "./Cards";
import { Pagination } from "antd";

import "./ContentPage.css";
import { PUBLIC_ASSETS_PATH } from "./Constants";
function ContentPage() {
  return (
    <div className="container">
      <div className="topSection">
        <div className="leftDiv">
          <div className="leftDivTxt"> My Jobs </div>
          <div className="leftDivTxt"> My Interview </div>
        </div>
        <div>
          <Button
            size="large"
            style={{
              textTransform: "uppercase",
              backgroundColor: "#75C059",
              color: "#ffff",
            }}
          >
            Create New Job
          </Button>
        </div>
      </div>
      <div className="searchBar">
        <div className="topLeft">
          <span> Sort By:</span>
          <select className="dropdown">
            <option>Abc</option>
          </select>
          <span>
            Most Recent
            <img
              src={PUBLIC_ASSETS_PATH + "/arrowDown.png"}
              className="arrowDownTop"
            />
          </span>
        </div>
        <div className="topRight">
          <div className="search-container">
            <img
              src={PUBLIC_ASSETS_PATH + "/search.png"}
              className="searchIcon"
            />
            <input
              type="text"
              className="search-input"
              placeholder="Search by Job Title"
            />
          </div>
        </div>
      </div>
      <Cards />
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

export default ContentPage;
