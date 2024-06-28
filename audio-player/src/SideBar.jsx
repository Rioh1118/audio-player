import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <>
      <div className="side-bar">
        <input type="search" id="audio-search" placeholder="search" />
        <div className="button container">
          <ul className="menu">
            <li>
              <button className="menu-item">Library</button>
            </li>
            <li>
              <button className="menu-item">Play Queue</button>
            </li>
            <li>
              <button className="menu-item">Albums</button>
            </li>
            <li>
              <button className="menu-item">Tracks</button>
            </li>
            <li>
              <button className="menu-item">Artists</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
