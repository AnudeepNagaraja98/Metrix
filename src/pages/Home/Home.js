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
        <div className="home_body">Body</div>
      </div>
    </div>
  );
};

export default Home;
