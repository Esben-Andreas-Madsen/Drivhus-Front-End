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

function TempGraph() {
  const [tempReadings, setTempReadings] = useState([]);
  const [tempTimeStamps, setTempTimeStamps] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getReadings();
    }, 300000);

    getReadings();

    return () => clearInterval(interval);
  }, []);

  async function getReadings() {
    try {
      const url =
        "http://140.82.33.21:5001/Reading/GetReadingsByName?name=Tomato";
      const response = await fetch(url);
      const data = await response.json();
      const tempReadings = data.value.map((reading) => reading.temperature);
      const tempTimeStamps = data.value.map(
        (reading) =>
          reading.timestamp.split("T")[0] +
          " : " +
          reading.timestamp.substr(11, 5)
      );
      console.log(data);
      setTempReadings(tempReadings);
      setTempTimeStamps(tempTimeStamps);
    } catch (err) {
      console.log(err);
    }
  }

  const data = {
    labels: tempTimeStamps,
    datasets: [
      {
        label: "Temp historik",
        data: tempReadings,
        backgroundColor: "red",
        borderColor: "black",
        pointBorderColor: "red",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "°C",
          font: {
            size: 20,
          },
        },
        min: -10,
        max: 50,
      },
    },
  };

  return (
    <div style={{ width: "85%" }}>
      {tempReadings.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default TempGraph;
