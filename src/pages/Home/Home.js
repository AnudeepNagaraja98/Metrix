import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import "./Home.css";

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
              <div className="sales_card">Card</div>
              <div className="sales_card">Card</div>
            </div>
            <div className="marketing_graph">
              <div className="pie_graph">Pie Graph</div>
              <div className="marketing_section">
                <div className="marketing_card">Card</div>
                <div className="marketing_card">Card</div>
              </div>
            </div>
            <div className="summary_graph">Summary</div>
          </div>
          <div className="order_section">
            <div className="order_card">Order Card</div>
            <div className="recent_cards">Recent Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
