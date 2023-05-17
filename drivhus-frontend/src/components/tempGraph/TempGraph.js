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
  const [tempReadings, setTempReadings] = useState(getReadings());
  const [tempTimeStamps, setTempTimeStamps] = useState(getTimeStamps());

  useEffect(() => {
    const interval = setInterval(() => {
      setTempReadings(getReadings());
      setTempTimeStamps(getTimeStamps());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  async function getReadings() {
    try {
      const url = "http://70.34.253.20:5001/Reading/GetReadings";
      const response = await fetch(url);
      let data = await response.json();
      let tempReadings = await data.value.map((reading) => reading.temperature);
      return tempReadings;
    } catch (err) {
      console.log(err);
    }
  }

  async function getTimeStamps() {
    try {
      const url = "http://70.34.253.20:5001/Reading/GetReadings";
      const response = await fetch(url);
      let data = await response.json();
      let tempTimeStamps = await data.value.map((reading) => reading.timestamp);
      console.log(tempTimeStamps);
      return tempTimeStamps;
    } catch (err) {
      console.log(err);
    }
  }

  /*---------------------------------------------------------------------*/

  const data = {
    labels: { tempTimeStamps },
    datasets: [
      {
        label: "Temp historik",
        data: { tempReadings },
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
        min: -10,
        max: 35,
      },
    },
  };

  return (
    <>
      <div>
        {tempReadings !== null ? (
          <Line data={data} options={options} redraw={true} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default TempGraph;
