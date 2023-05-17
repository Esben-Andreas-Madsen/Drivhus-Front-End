import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

export function TextField({ value }) {
  return <input type="text" value={value} readOnly />;
}

export default function Values() {
  const [CO2, setCO2] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temp, setTemp] = useState("");


  //Her fetcher vi data fra vores API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://70.34.253.20:5001/Reading/GetNewestReading");
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Tilføjet konsoludskrift af data
          setTemp(`${data.value.map((reading) => reading.temperature)} °C`);
          setCO2(`${data.value.map((reading) => reading.co2)} ppm`);
          setHumidity(`${data.value.map((reading) => reading.humidity)} %`);
        } else {
          console.log("Fejl ved hentning af data fra API'en.");
        }
      } catch (error) {
        console.log("Fejl ved hentning af data fra API'en:", error);
      }
    };

    // Hent data ved komponentens start og derefter hvert 3. sekund
    fetchData();
    const interval = setInterval(fetchData, 3000);

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
