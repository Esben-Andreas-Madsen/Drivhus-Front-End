import React, { useState, useEffect } from 'react';
import "./CO2.module.css";
 

export function TextField({ value }) {
  return (
    <input type="text" value={value} readOnly />
  );
}

export default function CO2() {
  const [co2Values] = useState([42, 50, 60]); // Tre forskellige værdier
  const [currentValueIndex, setCurrentValueIndex] = useState(0); // Index på den aktuelle værdi

  useEffect(() => {
    // Sæt intervallet til at skifte værdien hver 30 sekunder
    const intervalId = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % co2Values.length);
    }, 300);
    
    // Ryd op efter intervallet når komponenten unmountes
    return () => clearInterval(intervalId);
  }, [co2Values.length]);

  return (
    <div>
      <h1>DRIVHUS</h1>
      <h2>CO2</h2>
      <TextField value={co2Values[currentValueIndex]} />
    </div>
  );
}
