import React, { Fragment } from "react";

//! Orders Icons
import Iphone13 from "../icons/Iphone13.png";
import Iphone13Pro from "../icons/iphone13Pro.png";

//! CSS
import "./Orders.css";

const Orders = () => {
  const ordersList = [
    {
      id: 0,
      img: Iphone13,
      name: "iPhone13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      id: 1,
      img: Iphone13Pro,
      name: "iPhone13Pro",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      id: 2,
      img: Iphone13,
      name: "iPhone13",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      id: 3,
      img: Iphone13Pro,
      name: "iPhone13Pro",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      id: 4,
      img: Iphone13Pro,
      name: "iPhone13Pro",
      price: "₦730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
    },
  ];
  return (
    <Fragment>
      {ordersList &&
        ordersList.map((val, i) => {
          return (
            <div className="orders_wrapper" key={val.id}>
              <div className="image_section">
                <img src={val.img} alt={val.img} className="order_images" />
              </div>
              <div className="description">
                <div className="name">
                  <p className="name_heading">{val?.name}</p>
                </div>
                <div className="price">
                  <p className="price_heading">{val?.price}</p>
                </div>
              </div>
              <div className="status_and_date">
                <div className="date_section">
                  <p className="date_heading">{val?.date}</p>
                </div>
                <div
                  className="status_section"
                  style={{
                    backgroundColor:
                      val?.status === "Completed" ? " #32936F1F" : "#F57E771F",
                    color: val?.status === "Completed" ? "#519C66" : "#CC5F5F",
                  }}
                >
                  {val?.status}
                </div>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Orders;
