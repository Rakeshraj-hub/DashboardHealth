import React from "react";
import lung from "../assets/lung2.jpg";
import teeth from "../assets/teeth2.png";
import bone from "../assets/bone.png";
import styles from "./HealthStatusCards.module.css";


const LungsIcon = () => (
  <img src={lung} alt="lung" className={styles.icon} />
  
);

const TeethIcon = () => (
  <img src={teeth} alt="teeth" className={styles.icon} />
  
);

const BoneIcon = () => (
  <img src={bone} alt="lung" className={styles.icon} />
  
);

// const TeethIcon = () => (
//   <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" stroke="none">
//     <path d="M8 4h8v4H8zM6 8h12v8H6zM8 16h8v4H8z" />
//   </svg>
// );

// const BoneIcon = () => (
//   <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" stroke="none">
//     <path d="M5 5h14v2H5zM5 17h14v2H5zM12 5v14" />
//   </svg>
// );

function HealthStatusCards() {
  const cards = [
    { label: "Lungs", date: "Date: 26 Oct 2021", percentage: 100, icon: <LungsIcon />, color: "#ffccd5" },
    { label: "Teeth", date: "Date: 26 Oct 2021", percentage: 50, icon: <TeethIcon />, color: "#d0f4de" },
    { label: "Bone", date: "Date: 26 Oct 2021", percentage: 75, icon: <BoneIcon />, color: "#cce3ff" },
  ];

  return (
    <div className={styles.statusContainer}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={styles.card}
          style={{ backgroundColor: card.color }}
        >
          <div className={styles.cardHeader}>
            {card.icon}
            <h5>{card.label}</h5>
          </div>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{ width: `${card.percentage}%` }}
            ></div>
          </div>
          <p className={styles.date}>{card.date}</p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;