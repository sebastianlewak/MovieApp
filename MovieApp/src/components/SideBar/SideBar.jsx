import React, { useState } from "react";
import logo from "../../assets/owca.png";
import "../SideBar/SideBar.css";

export const SideBar = ({ isOpen, onToggle }) => {
  const menuBtnChange = () => {
    if (isOpen) {
      return "bx-menu-alt-right";
    } else {
      return "bx-menu";
    }
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo-details">
          <div className="logo_name">
            <img src={logo} alt="profileImg" />
            Owca Movie
          </div>
          <i
            className={`bx ${menuBtnChange()}`}
            id="btn"
            onClick={onToggle}
          ></i>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">
              <i className="bx bx-home-smile"></i>
              <span className="links_name">Home</span>
            </a>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-movie"></i>
              <span className="links_name">Movies</span>
            </a>
            <span className="tooltip">Movies</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-tv"></i>
              <span className="links_name">Tv Shows</span>
            </a>
            <span className="tooltip">Tv Shows</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-time"></i>
              <span className="links_name">To Watch</span>
            </a>
            <span className="tooltip">To Watch</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-heart"></i>
              <span className="links_name">Favorite</span>
            </a>
            <span className="tooltip">Favorite</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-book"></i>
              <span className="links_name">About Project</span>
            </a>
            <span className="tooltip">About Project</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img src={logo} alt="profileImg" />
              <div className="name_info">
                <div className="name">Owieczka</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
    </>
  );
};
