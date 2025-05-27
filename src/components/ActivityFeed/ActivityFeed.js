import React from "react";
import styles from "./ActivityFeed.module.css";

function ActivityFeed() {
  const feed = [
    "Dr. Roy added a new prescription for Priya.",
    "Amit Kumar scheduled a follow-up visit.",
    "Lab reports uploaded for Rahul Verma.",
  ];

  return (
    <div className={styles.feedContainer}>
      <h3>Recent Activity</h3>
      <ul>
        {feed.map((item, index) => (
          <li key={index} className={styles.activityItem}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
