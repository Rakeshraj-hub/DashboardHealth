import React from "react";
import styles from "./ActivityFeed.module.css";


function ActivityFeed() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const activities = [
    { data: [3, 1, 4, 2, 5, 1, 3], color: "#4a90e2" },
    { data: [2, 3, 1, 4, 2, 3, 1], color: "#a3c6ff" },
    { data: [1, 2, 3, 1, 3, 2, 4], color: "#a3c6ff" },
  ];

  const maxHeight = 5; // Maximum value for scaling the bars

  return (
    <div className={styles.activityContainer}>
    
      <h3 className={styles.title}>Activity</h3>
      <div className={styles.chartWrapper}>
        <div className={styles.barContainer}>
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className={styles.dayColumn}>
              <div className={styles.bars}>
                {activities.map((activity, activityIndex) => (
                  <div
                    key={activityIndex}
                    className={styles.bar}
                    style={{
                      height: `${(activity.data[dayIndex] / maxHeight) * 100}%`,
                      backgroundColor: activity.color,
                    }}
                  />
                ))}
              </div>
              <span className={styles.dayLabel}>{day}</span>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.appointmentText}>3 appointment on this week</p>
      
    </div>
  );
}

export default ActivityFeed;