import React from "react";
import AnatomySection from "../AnatomySection/AnatomySection";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
import CalendarView from "../CalendarView/CalendarView";
// import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import styles from "./DashboardMainContent.module.css";

const DashboardMainContent = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          <AnatomySection />
          <ActivityFeed />
          
        </div>
        <div className={styles.rightColumn}>
          <HealthStatusCards />
          <CalendarView />
          {/* <UpcomingSchedule /> */}
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;