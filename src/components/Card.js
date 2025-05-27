import React from "react";
import "./Card.css";
import { ICON_COLOR } from "./constant";
const Card = ({ doctype, time, docname,icon,color,textColor }) => {
    console.log(color,'colro')
  return (
    <div className="cardcontainer" style={{ backgroundColor: color }}>
      <div className="cardiv">
        <div className="cardalign">
        <span style={{color:textColor}}>{doctype}</span>
        <span style={{color:textColor}}>{icon}</span>

        </div>
        <span style={{color:textColor}}>{time}</span>
        <span style={{color:textColor}}>{docname}</span>
      </div>
    </div>
  );
};

export default Card;
