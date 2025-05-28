import React from "react";
import "./Dates.css";
import { CALENDER_DATA } from "./calenderData";

const Dates = () => {
  function customColor(date, time) {
    let backGroundColor = "";
    let color = "";
    let borderRadius = "";
    if (date === 28 && time === "11.00") {
      backGroundColor = "grey";
      color = "white";
      borderRadius = 10;
    } else if (date === 30 && time === "12.00") {
      backGroundColor = "grey";
      color = "white";
      borderRadius = 10;
    } else if (date === 31 && time === "9.00") {
      backGroundColor = "grey";
      color = "white";
      borderRadius = 10;
    } else if (date === 26 && time === "9.00") {
      backGroundColor = "blue";
      color = "white";
      borderRadius = 10;
    } else {
      backGroundColor = "white";
      color = "black";
      borderRadius = 0;
    }

    return { backGroundColor, color, borderRadius };
  }
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <span>October 2021</span>
        {/* arrows */}
      </div>
      <div className="calendar-grid">
        {CALENDER_DATA.map((day) => (
          <div className="calendar-column" key={day}>
            {day.day === "Sun" ? (
              <div className="calendar-day" style={{ color: "grey" }}>
                {day.day}
              </div>
            ) : (
              <div className="calendar-day">{day.day}</div>
            )}
            {/* <div className="calendar-day">{day.day}</div> */}
            <div
              className="calendar-day"
              style={{ color: day.day === "Sun" ? "grey" : "black" }}
            >
              {day.date}
            </div>

            {day.hour.map((hour) => {
                
                  const { backGroundColor, color, borderRadius } = customColor(day.date, hour.time);

                return (
              <div
                // className={`calendar-slot ${
                //   hour === "09:00" && day === "Tues" ? "active-slot" : ""
                // }`}
                // key={hour}
                className="calender-slot"
                style={{
                  color: color,
                  backgroundColor: backGroundColor,
                  borderRadius: `${borderRadius}px`,
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  padding:'5px'
                }}
              >
                <span style={{fontSize:'10px',alignItems:'center'}}>{hour.time}</span>
                {/* {hour === "09:00" && day === "Tues" && <span>09:00</span>} */}
              </div>
            )})}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dates;
