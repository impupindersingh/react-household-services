import React from "react";
import "./Searchbar.css";
import searchIcon from "../../images/searcbar/searchbar-search-icon.png";

function Searchbar() {
  return (
    <div className="search-container">
      <div className="keyword-box">
        <input type="text" placeholder="keyword" />
      </div>
      <div className="location-box">
        <input type="text" placeholder="location" className="location-icon" />
      </div>
      <div className="serach-icon-box">
        <img src={searchIcon} alt="searchIcon" />
      </div>
    </div>
  );
}

export default Searchbar;
