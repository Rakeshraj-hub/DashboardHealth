import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";

import styles from "./App.module.css";

 function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;




