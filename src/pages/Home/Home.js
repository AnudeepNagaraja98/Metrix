import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Orders from "../../components/Orders";
import Card from "../../components/Card";
import Graph from "../../icons/Graph.svg";
import Users from "../../icons/2 User.svg";
import Bag from "../../icons/Bag.svg";
import FolderBody from "../../icons/Folder-Body.svg";
import Cart from "../../icons/Cart-Body.svg";
import "./Home.css";

const graphCard = {
  iconBackGroundColor: "#5570F11F",
  selectIcon: true,
  icon: Graph,
  heading1: "Sales",
  heading2: "Volume",
  subtitle1: "₦4,000,000.00",
  subtitle2: "450",
  percentage2: "+20.00%",
  percentageColor: "#519C66",
  isActive: false,
};

const usersCard = {
  iconBackGroundColor: "#FFCC9129",
  selectIcon: true,
  icon: Users,
  heading1: "Customers",
  heading2: "Active",
  subtitle1: "1250",
  subtitle2: "1180",
  percentage1: "+15.80%",
  percentage2: "+85.00%",
  percentageColor: "#519C66",
  isActive: false,
};

const bagCard = {
  iconBackGroundColor: "#FFCC9129",
  selectIcon: true,
  icon: Bag,
  heading1: "All Orders",
  heading2: "Completed",
  heading3: "Pending",
  subtitle1: "450",
  subtitle2: "5",
  subtitle3: "445",
  isActive: false,
};

const allProducts = {
  iconBackGroundColor: "#7087f3",
  selectIcon: false,
  backGroundColor: "#5570f1",
  icon: FolderBody,
  heading1: "All Products",
  heading2: "Active",
  subtitle1: "45",
  subtitle2: "32",
  percentage2: "+24.80%",
  isActive: true,
};

const cartProducts = {
  iconBackGroundColor: "#FFCC9129",
  selectIcon: true,
  icon: Cart,
  heading1: "Abandoned Cart",
  heading2: "Customers",
  subtitle1: "20%",
  subtitle2: "30",
  percentage1: "+0.0%",
  percentageColor: "#519C66",
  isActive: false,
};

const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="sidebar_wrapper">
        <Sidebar />
      </div>
      <div className="home_headerAndBodyWrapper">
        <div className="home_header">
          <Header />
        </div>
        <div className="home_body">
          <div className="sales_section">
            <div className="sales_cards_section">
              <div className="sales_card">
                <Card cardData={graphCard} />
              </div>
              <div className="sales_card">
                <Card cardData={usersCard} />
              </div>
            </div>
            <div className="marketing_graph">
              <div className="pie_graph">Pie Graph</div>
              <div className="marketing_section">
                <div className="marketing_card">
                  <Card cardData={allProducts} />
                </div>
                <div className="marketing_card">
                  <Card cardData={cartProducts} />
                </div>
              </div>
            </div>
            <div className="summary_graph">Summary</div>
          </div>
          <div className="order_section">
            <div className="order_card">
              <Card cardData={bagCard} />
            </div>
            <div className="recent_cards">
              <div className="heading_section">
                <p className="card_heading">Recent Orders</p>
              </div>
              <div className="orders">
                <Orders />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
