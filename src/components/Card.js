import React from "react";
import ChevDown from "../icons/Chev-Down.svg";
import "./Card.css";

const Card = ({ cardData }) => {
  return (
    <div
      className="card_container"
      style={{
        backgroundColor: cardData?.backGroundColor
          ? cardData?.backGroundColor
          : "#FFFF",
      }}
    >
      <div className="image_select">
        <div
          className="image_cont"
          style={{ backgroundColor: cardData.iconBackGroundColor }}
        >
          <img src={cardData.icon} alt="card" className="icons" />
        </div>
        {cardData?.selectIcon && (
          <>
            <div className="select_icon">
              <p className="week">This Week</p>
              <img src={ChevDown} alt="chev_down" className="chev_down" />
            </div>
          </>
        )}
      </div>

      <div className="data_section">
        <div className="name_section">
          <div
            className="name"
            style={{ color: cardData?.isActive ? "#FFFFFF" : "#8b8d97" }}
          >
            {cardData.heading1}
          </div>
          <div
            className="number"
            style={{ color: cardData?.isActive ? "#FFFFFF" : "#45464e" }}
          >
            <div className="numeric">{cardData.subtitle1}</div>
            {cardData?.percentage1 && (
              <div
                className="percentage"
                style={{ color: cardData.percentageColor }}
              >
                {cardData.percentage1}
              </div>
            )}
          </div>
        </div>
        <div className="name_section">
          <div
            className="name"
            style={{ color: cardData?.isActive ? "#FFFFFF" : "#8b8d97" }}
          >
            {cardData.heading2}
          </div>
          <div className="number">
            <div
              className="numeric"
              style={{ color: cardData?.isActive ? "#FFFFFF" : "#45464e" }}
            >
              {cardData.subtitle2}
            </div>
            {cardData?.percentage2 && (
              <div
                className="percentage"
                style={{
                  color: cardData?.isActive
                    ? "#FFFFFF"
                    : cardData.percentageColor,
                }}
              >
                {cardData.percentage2}
              </div>
            )}
          </div>
        </div>
        <>
          {cardData?.heading3 && cardData?.subtitle3 && (
            <div className="name_section">
              <div className="name">{cardData.heading3}</div>
              <div className="number">
                <div className="numeric">{cardData.subtitle3}</div>
                {cardData?.percentage3 && (
                  <div
                    className="percentage"
                    style={{ color: cardData.percentageColor }}
                  >
                    {cardData.percentage3}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Card;
