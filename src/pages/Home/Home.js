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
import ChevDown from "../../icons/Chev-Down.svg";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
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

const getOptions = (type) => ({
  chart: {
    type: type,
    width: 150,
    height: 150,
    tooltip: {
      pointFormat: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 150,
            maxHeight: 150,
          },
          chartOptions: {
            legend: {
              enabled: false,
            },
          },
        },
      ],
    },
  },
  plotOptions: {
    series: {
      borderWidth: 0,
    },
    type: type,
    size: "100%",
    innerSize: "90%",
    dataLabels: {
      distance: "-20px",
    },
  },
  title: {
    text: "",
  },
  credits: {
    enabled: false,
  },
  yAxis: {
    title: {
      text: "Values",
    },
  },
  colors: ["#5570F1", "#FFCC91", "#97A5EB"],
  series: [
    {
      data: [
        {
          y: 60,
        },
        {
          y: 25,
        },
        {
          y: 15,
        },
      ],
      size: "100%",
      innerSize: "80%",
      dataLabels: {
        enabled: false,
        labelConnector: false,
      },
    },
  ],
});

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
              <div className="pie_graph">
                <div className="pie_graph_heading">
                  <p className="pie_heading">Marketting</p>
                  <div className="select_icon">
                    <p className="week">This Week</p>
                    <img src={ChevDown} alt="chev_down" className="chev_down" />
                  </div>
                </div>
                <div className="pie_graph_body">
                  <div className="pie_chart_indicators">
                    <div className="indicators">
                      <div
                        className="indicator"
                        style={{
                          background: "#5570F1",
                        }}
                      />
                      <p className="indicator_name">Acquistion</p>
                    </div>
                    <div className="indicators">
                      <div
                        className="indicator"
                        style={{
                          background: "#FFCC91",
                        }}
                      />
                      <p className="indicator_name">Purchase</p>
                    </div>
                    <div className="indicators">
                      <div
                        className="indicator"
                        style={{
                          background: "#97A5EB",
                        }}
                      />
                      <p className="indicator_name">Retention</p>
                    </div>
                  </div>
                  <div className="pie_chart">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={getOptions("pie")}
                    />
                  </div>
                </div>
              </div>
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
