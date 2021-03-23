import React from "react";

const CardsColor = ({ subtitle, text, icon, color }) => {
  return (
    <>
      <div className={"block-2 " + color}>
        <span className="wrap-icon">
          <span>
            <i className={icon}></i>
          </span>
        </span>
        <h2>{subtitle}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default CardsColor;
