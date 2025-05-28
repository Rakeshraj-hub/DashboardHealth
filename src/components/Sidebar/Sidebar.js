import React from "react";
import dashboard from '../assets/dashboard.png'
import history from '../assets/history2.png'
import calender from '../assets/calender2.jpg'
import stat from '../assets/statistics2.jpg'
import tool from '../assets/tool.png'
import chat from '../assets/chat.png'
import support from '../assets/support.png'
import setting from '../assets/setting.png'

import styles from "./Sidebar.module.css";



 const DashboardIcon = () => (
  <img src={dashboard} alt="dashboard" className={styles.icon} />
);

 
const HistoryIcon = () => (
 <img src={history} alt="history" className={styles.icon} />
);

const CalendarIcon = () => (
 <img src={calender} alt="calender" className={styles.icon} />
);

const AppointmentsIcon = () => (
 <img src={calender} alt="calender" className={styles.icon} />
);

const StatisticsIcon = () => (
  <img src={stat} alt="stat" className={styles.icon} />
);

const ToolsIcon = () => (
  <img src={tool} alt="tool" className={styles.icon} />
);

const ChatIcon = () => (
 <img src={chat} alt="chat" className={styles.icon} />
);

const SupportIcon = () => (
 <img src={support} alt="support" className={styles.icon} />
);

const SettingsIcon = () => (
<img src={setting} alt="setting" className={styles.icon} />
);

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", icon: <DashboardIcon />, active: true },
    { label: "History", icon: <HistoryIcon /> },
 
    { label: "Calendar", icon: <CalendarIcon /> },
    { label: "Appointments", icon: <AppointmentsIcon /> },
    { label: "Statistics", icon: <StatisticsIcon /> },
    { label: "Tools", icon: <ToolsIcon /> },
    { label: "Chat", icon: <ChatIcon /> },
    { label: "Support", icon: <SupportIcon /> },
    { label: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>Healthcare.</h2>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${styles.navItem} ${item.active ? styles.active : ""}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;