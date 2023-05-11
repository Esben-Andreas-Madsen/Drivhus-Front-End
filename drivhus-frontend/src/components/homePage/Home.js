import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

export function TextField({ value }) {
  return <input type="text" value={value} readOnly />;
}

// start værdier når hjemmesiden åbnes
export default function Values() {
  const [CO2, setCO2] = useState(`${Math.floor(Math.random() * 1000) + 1}ppm`);

  const [humidity, setHumidity] = useState(
    `${Math.floor(Math.random() * 100) + 1}%`
  );

  const [temp, setTemp] = useState(`${Math.floor(Math.random() * 100) + 1}°C`);

  // værdierne ændres hvert 3.sekund
  useEffect(() => {
    const interval = setInterval(() => {
      const randomHumidity = Math.floor(Math.random() * 100) + 1;
      setHumidity(`${randomHumidity}%`);
      const randomTemp = Math.floor(Math.random() * 100) + 1;
      setTemp(`${randomTemp}°C`);
      const randomCO2 = Math.floor(Math.random() * 300) + 1;
      setCO2(`${randomCO2}ppm`);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.overskrift}>
        <h1>DRIVHUS</h1>
      </div>

      <div className={styles.displayBox1}>
        <h2>Temperatur</h2>
        <div className={styles.displayTemp}>{temp}</div>
      </div>

      <div className={styles.displayBox2}>
        <h2>CO2</h2>
        <div className={styles.displayCO2}>{CO2}</div>
      </div>

      <div className={styles.displayBox3}>
        <h2>Luftfugtighed</h2>
        <div className={styles.displayLuft}>{humidity}</div>
      </div>
    </div>
  );
}
