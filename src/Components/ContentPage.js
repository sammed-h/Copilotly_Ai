import { Button } from "antd";
import React, { useState } from "react";
import Cards from "./Cards";
import { data } from "./MockData";
import "./ContentPage.css";
import { PUBLIC_ASSETS_PATH } from "./Constants";
function ContentPage() {
  const [sortedItems, setSortedItems] = useState(data);
  const [selectedValue, setSelectedValue] = useState("");

  function handleSelection(event) {
    setSelectedValue(event.target.value);
    if (event.target.value === "option1") {
      const sorted = [...sortedItems].sort((a, b) =>
        a.jobRole.localeCompare(b.jobRole)
      );
      setSortedItems(sorted);
    } else if (event.target.value === "option2") {
      const sorted = [...sortedItems].sort((a, b) =>
        b.jobRole.localeCompare(a.jobRole)
      );
      setSortedItems(sorted);
    } else {
      setSortedItems(data);
    }
  }

  return (
    <div className="container">
      <div className="topSection">
        <div className="leftDiv">
          <div className="leftDivTxt"> My Jobs </div>
          <div className="leftDivTxt"> My Interview </div>
        </div>
        <div>
          <button className="createJobBtn">Create New Job</button>
        </div>
      </div>
      <div className="searchBar">
        <div className="topLeft">
          <span> Sort By:</span>
          <select
            className="dropdown"
            value={selectedValue}
            onChange={handleSelection}
          >
            <option hidden value="">
              Abc
            </option>
            <option value="option1">A to Z</option>
            <option value="option2">Z to A</option>
            <option value="option3"> no sort </option>
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
              placeholder="Search "
            />
          </div>
        </div>
      </div>
      <Cards data={sortedItems} />
    </div>
  );
}

export default ContentPage;
