import React from "react";
import styles from "./UpcomingSchedule.module.css";

// Importing simple SVG icons (you can replace these with actual icon imports if you have a library like react-icons)
const HealthCheckupIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const OphthalmologistIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2C6 2 2 12 2 12s4 10 10 10 10-10 10-10S18 2 12 2z" />
  </svg>
);

const CardiologistIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <path d="M12 3v6m-3 0h6" />
  </svg>
);

const NeurologistIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </svg>
);

function UpcomingSchedule() {
  const schedule = [
    {
      day: "On Thursday",
      appointments: [
        { time: "11:00 AM", specialty: "Health checkup", icon: <HealthCheckupIcon /> },
        { time: "14:00 PM", specialty: "Ophthalmologist", icon: <OphthalmologistIcon /> },
      ],
    },
    {
      day: "On Saturday",
      appointments: [
        { time: "12:00 AM", specialty: "Cardiologist", icon: <CardiologistIcon /> },
        { time: "16:00 PM", specialty: "Neurologist", icon: <NeurologistIcon /> },
      ],
    },
  ];

  return (
    <div className={styles.scheduleContainer}>
      <h3 className={styles.title}>The Upcoming Schedule</h3>
      {schedule.map((daySchedule, index) => (
        <div key={index} className={styles.daySection}>
          <h4 className={styles.dayTitle}>{daySchedule.day}</h4>
          <ul className={styles.appointmentList}>
            {daySchedule.appointments.map((appointment, idx) => (
              <li key={idx} className={styles.appointment}>
                <div className={styles.iconWrapper}>{appointment.icon}</div>
                <div className={styles.appointmentDetails}>
                  <p className={styles.specialty}>{appointment.specialty}</p>
                  <p className={styles.time}>{appointment.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;