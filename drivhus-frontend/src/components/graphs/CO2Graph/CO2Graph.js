import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function CO2Graph() {
  const [co2Readings, setCO2Readings] = useState([]);
  const [co2TimeStamps, setCO2TimeStamps] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getReadings();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  async function getReadings() {
    try {
      const url = "http://70.34.253.20:5001/Reading/GetReadings";
      const response = await fetch(url);
      const data = await response.json();
      const tempReadings = data.value.map((reading) => reading.co2);
      const tempTimeStamps = data.value.map((reading) => reading.timestamp);
      setCO2Readings(tempReadings);
      setCO2TimeStamps(tempTimeStamps);
    } catch (err) {
      console.log(err);
    }
  }

  const data = {
    labels: co2TimeStamps,
    datasets: [
      {
        label: "CO2 historik",
        data: co2Readings,
        backgroundColor: "black",
        borderColor: "black",
        pointBorderColor: "black",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 1000,
      },
    },
  };

  return (
    <div style={{ width: "90%" }}>
      {co2Readings.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CO2Graph;
