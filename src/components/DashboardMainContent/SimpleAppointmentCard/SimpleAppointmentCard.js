import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

const SimpleAppointmentCard = ({ title, time, date, type }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.type}>{type}</span>
      </div>
      <p className={styles.timeDate}>{date} at {time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
