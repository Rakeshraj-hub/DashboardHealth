import React from "react";
import dashboard from '../assets/dashboard.png'
import styles from "./Sidebar.module.css";


// const DashboardIcon = () => (
//   <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     {/* <rect x="3" y="3" width="7" height="7" />
//     <rect x="14" y="3" width="7" height="7" />
//     <rect x="3" y="14" width="7" height="7" />
//     <rect x="14" y="14" width="7" height="7" /> */}
//     <img src={dashboard} alt="dashboard"/>
//   </svg>
// );
 const DashboardIcon = () => (
  <img src={dashboard} alt="dashboard" className={styles.icon} />
);
const HistoryIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 8v4l3 3" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const CalendarIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const AppointmentsIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 2v4M16 2v4" />
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18M9 14h6" />
  </svg>
);

const StatisticsIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18" />
    <path d="M7 14v4M12 10v8M17 12v6" />
  </svg>
);

const ToolsIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2l-4 4 6 6 4-4-6-6zM4 14l6-6-4-4-6 6 4 4z" />
  </svg>
);

const ChatIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
  </svg>
);

const SupportIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4m0-4h.01" />
  </svg>
);

const SettingsIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
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