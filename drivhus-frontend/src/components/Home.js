import React, { useState } from "react";
import styles from "./Home.module.css";

export function TextField({ value }) {
  return <input type="text" value={value} readOnly />;
}

export default function CO2() {
  const [co2Values] = useState([42, 50, 60]); // Tre forskellige værdier

  return (
    <div>
      <div className={styles.overskrift}>
        <h1>DRIVHUS</h1>
      </div>

      <div className={styles.displayBox1}>
        <h2>Temperatur</h2>
        <div className={styles.displayTemp}>{co2Values}</div>
      </div>

      <div className={styles.displayBox2}>
        <h2>CO2</h2>
        <div className={styles.displayCO2}>{co2Values}</div>
      </div>

      <div className={styles.displayBox3}>
        <h2>Luftfugtighed</h2>
        <div className={styles.displayLuft}>{co2Values}</div>
      </div>
    </div>
  );
}
