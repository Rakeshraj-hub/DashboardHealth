import React from "react";
import styles from "./CalendarView.module.css";

const days = [
  { day: "Mon", date: "25" },
  { day: "Tues", date: "26" },
  { day: "Wed", date: "27" },
  { day: "Thurs", date: "28" },
  { day: "Fri", date: "29" },
  { day: "Sat", date: "30" },
  { day: "Sun", date: "31" },
];
const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

const appointments = {
  Tues: ["10:00", "13:00"],
  Thurs: ["11:00"],
  Sat: ["11:00", "14:00"],
};

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <span>OCTOBER 2021</span>
          <div className={styles.navButtons}>
            <button>←</button>
            <button>→</button>
          </div>
        </div>
        <div className={styles.dayRow}>
          <div></div>
          {days.map((dayObj) => (
            <div key={dayObj.day} className={styles.day}>
              <span className={styles.dayName}>{dayObj.day}</span>
              <span className={styles.dayDate}>{dayObj.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.body}>
        {times.map((time) => (
          <div key={time} className={styles.row}>
            <div className={styles.time}>{time}</div>
            {days.map((dayObj) => {
              const isHighlighted = appointments[dayObj.day]?.includes(time);
              return (
                <div
                  key={dayObj.day + time}
                  className={`${styles.slot} ${
                    isHighlighted ? styles.highlight : ""
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;