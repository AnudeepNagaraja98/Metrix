import React from "react";
import "./Sidebar.css";
import Metrix from "../icons/Metrix.svg";
import Headphone from "../icons/Headphones.svg";
import Gift from "../icons/Gift.svg";
import ChevronDown from "../icons/Chevron-Down.svg";
import Logout from "../icons/Logout.svg";
import Bag from "../icons/Bag.svg";
import Users from "../icons/2-User.svg";
import Category from "../icons/Category.svg";
import Chat from "../icons/Chat.svg";
import Folder from "../icons/Folder.svg";
import Setting from "../icons/Setting.svg";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="logo_section">
        <img src={Metrix} alt="metrix_icon" className="metrix_icon" />
        <p className="metrix">Metrix</p>
      </div>
      <div className="navigation_section">
        <div className="dashboard_wrapper">
          <div className="dashboard_section active">
            <img
              src={Category}
              alt="category_icon"
              className="navigation_icons"
            />
            <p className="dashboard">Dashboard</p>
          </div>
          <div className="dashboard_section">
            <img src={Bag} alt="Bag_icon" className="navigation_icons" />
            <p className="dashboard">Orders</p>
          </div>
          <div className="dashboard_section">
            <img src={Users} alt="Users_icon" className="navigation_icons" />
            <p className="dashboard">Customers</p>
          </div>
          <div className="dashboard_section">
            <img src={Folder} alt="Folder_icon" className="navigation_icons" />
            <p className="dashboard">Inventory</p>
          </div>
          <div className="dashboard_section">
            <img src={Chat} alt="Chat_icon" className="navigation_icons" />
            <p className="dashboard">Chat</p>
          </div>
          <div className="dashboard_section">
            <img
              src={Setting}
              alt="Setting_icon"
              className="navigation_icons"
            />
            <p className="dashboard">Settings</p>
          </div>
        </div>
      </div>
      <div className="accountupgrade_section">
        <div className="support_contact_container support_contact">
          <img
            src={Headphone}
            alt="headphones_icon"
            className="headphone_icon"
          />
          <p className="contact_support_para contact_support">
            Contact Support
          </p>
        </div>
        <div className="gift_container gift_section">
          <div className="gift_wrapper">
            <img src={Gift} alt="gift_icon" className="gift_icon" />
            <p className="gift_para gift">Free Gift Awaits You!</p>
          </div>
          <div className="upgrade_account_container">
            <p className="upgrade_account_para upgrade_account">
              Upgrade Your Account
            </p>
            <img src={ChevronDown} alt="gift_icon" className="chevron_icon" />
          </div>
        </div>
      </div>
      <div className="logout_section">
        <img src={Logout} alt="logout_icon" className="logout_icon" />
        <p className="logout_para logout">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
