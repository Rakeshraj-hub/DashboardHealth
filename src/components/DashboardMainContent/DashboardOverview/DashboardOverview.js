import React from "react";
import styles from "./DashboardOverview.module.css";

function DashboardOverview() {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.card}>
        <h4>Total Patients</h4>
        <p>1,250</p>
      </div>
      <div className={styles.card}>
        <h4>Appointments</h4>
        <p>450</p>
      </div>
      <div className={styles.card}>
        <h4>Doctors</h4>
        <p>80</p>
      </div>
      <div className={styles.card}>
        <h4>Revenue</h4>
        <p>$95K</p>
      </div>
    </div>
  );
}

export default DashboardOverview;
