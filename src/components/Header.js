import React from "react";

//! Icons
import Notification from "../icons/Notification.svg";
import Home from "../icons/Home.svg";
import Profile from "../icons/Profile.svg";

//! CSS
import "./Header.css";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="dashboard_container">
        <div className="dashboard_wrapper">
          <p className="dashboard_para">Dashboard</p>
        </div>
        <div className="icon_wrapper">
          <select id="user" name="user" form="userform">
            <option value="nanny">Nanny's Shop</option>
          </select>
          <img src={Notification} alt="Notification_logo" />
          <img src={Profile} alt="Profile_logo" />
        </div>
      </div>
      <div className="navigation_helper">
        <img src={Home} alt="Home_logo" />
      </div>
    </div>
  );
};

export default Header;
