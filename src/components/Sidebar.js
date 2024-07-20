import React, { useState } from "react";

//! Metrix Icons
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
import ActiveCategory from "../icons/Category-Active.svg";
import ActiveBag from "../icons/Bag-Active.svg";
import ActiveUser from "../icons/2-User-Active.svg";
import ActiveFolder from "../icons/Folder-Active.svg";
import ActiveChat from "../icons/Chat-Active.svg";
import ActiveSetting from "../icons/Setting-Active.svg";

//! CSS
import "./Sidebar.css";

const dashboardMenus = [
  {
    id: 0,
    name: "Dashboard",
    icon: Category,
    active: ActiveCategory,
    isActiveTab: true,
    notification: null,
  },
  {
    id: 1,
    name: "Orders",
    icon: Bag,
    active: ActiveBag,
    isActiveTab: false,
    notification: 3,
  },
  {
    id: 3,
    name: "Customers",
    icon: Users,
    active: ActiveUser,
    isActiveTab: false,
    notification: null,
  },
  {
    id: 4,
    name: "Inventory",
    icon: Folder,
    active: ActiveFolder,
    isActiveTab: false,
    notification: null,
  },
  {
    id: 5,
    name: "Conversations",
    icon: Chat,
    active: ActiveChat,
    isActiveTab: false,
    notification: 16,
  },
  {
    id: 6,
    name: "Settings",
    icon: Setting,
    active: ActiveSetting,
    isActiveTab: false,
    notification: null,
  },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(dashboardMenus);
  const handleClick = (val) => {
    for (let i = 0; i < dashboardMenus.length; i++) {
      if (val.id === dashboardMenus[i].id) {
        dashboardMenus[i].isActiveTab = true;
      } else {
        dashboardMenus[i].isActiveTab = false;
      }
    }
    setActiveTab([...dashboardMenus]);
  };

  return (
    <div className="sidebar_container">
      <div className="logo_section">
        <img src={Metrix} alt="metrix_icon" className="metrix_icon" />
        <p className="metrix">Metrix</p>
      </div>
      <div className="navigation_section">
        <div className="dashboard_wrapper">
          {activeTab &&
            activeTab?.map((val) => {
              return (
                <div
                  className={`dashboard_section ${
                    val?.isActiveTab && "active"
                  }`}
                  key={val.id}
                  onClick={() => handleClick(val)}
                >
                  <img
                    src={val?.isActiveTab === true ? val?.active : val?.icon}
                    alt="category_icon"
                    className="navigation_icons"
                  />
                  <p className="dashboard">{val.name}</p>
                  {val?.notification && (
                    <div className="notification_wrapper">
                      <p className="dashboard notification_number">
                        {val?.notification}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
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
