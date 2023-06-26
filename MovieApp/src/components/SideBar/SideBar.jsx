import React from "react";
import logo from "../../assets/owca.png";
import "../SideBar/SideBar.css";
import { Link } from "react-router-dom";

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
            <img className="profile-logo" src={logo} alt="profileImg" />
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
            <Link to="/">
              <i className="bx bx-home-smile"></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <Link to="/movies">
              <i className="bx bx-movie"></i>
              <span className="links_name">Top 100 Movies</span>
            </Link>
            <span className="tooltip"> Top 100 Movies</span>
          </li>
          <li>
            <Link to="/tvshows">
              <i className="bx bx-tv"></i>
              <span className="links_name">Top 100 Tv Shows</span>
            </Link>
            <span className="tooltip">Top 100 Tv Shows</span>
          </li>
          {/* <li>
            <Link to="/towatch">
              <i className="bx bx-time"></i>
              <span className="links_name">To Watch</span>
            </Link>
            <span className="tooltip">To Watch</span>
          </li> */}
          <li>
            <Link to="/about">
              <i className="bx bx-book"></i>
              <span className="links_name">About Project</span>
            </Link>
            <span className="tooltip">About Project</span>
          </li>
          {/* <li className="profile">
            <div className="profile-details">
              <img className="profile-logo" src={logo} alt="profileImg" />
              <div className="name_info">
                <div className="name">Owieczka</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li> */}
        </ul>
      </div>
    </>
  );
};
