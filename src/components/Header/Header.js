import React from "react";
import { Bell, Plus, Search } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        {/* <h1 className={styles.logo}>Healthcare.</h1> */}
        <h2 className={styles.title}>DASHBOARD</h2>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} size={16} />
          <input
            type="text"
            placeholder="Search"
            className={styles.search}
          />
        </div>
        <Bell className={styles.icon} size={20} />
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className={styles.avatar}
        />
        <button className={styles.addButton}>
          <Plus size={16} />
        </button>
      </div>
    </header>
  );
}

export default Header;