import React from "react";
import healthIndicators from "../data/healthData";
import anatomy from "../assets/Anatomy2.jpg";
import styles from "./AnatomySection.module.css";

const AnatomySection = () => {
  return (
    <div className={styles.anatomy}>
      <img
        src={anatomy}
        alt="Human Anatomy"
        className={styles.image}
      />
      {healthIndicators.map((item, index) => (
        <div
          key={index}
          className={styles.indicator}
          style={{ top: item.position.top, left: item.position.left,  }}
        >
          <span style={{ backgroundColor: item.color }}>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default AnatomySection;