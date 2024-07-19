import React from "react";
import "./Sidebar.css";
import Metrix from "../icons/Metrix.svg";
import Headphone from "../icons/Headphones.svg";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="logo_section">
        <img src={Metrix} alt="metrix_icon" className="metrix_icon" />
        <p>Metrix</p>
      </div>
      <div className="navigation_section">Navigation Section</div>
      <div className="accountupgrade_section">
        <div className="support_contact">
          <img
            src={Headphone}
            alt="headphones_icon"
            className="headphone_icon"
          />
          <p>Contact Support</p>
        </div>
      </div>
      <div className="logout_section">Logout Section</div>
    </div>
  );
};

export default Sidebar;
