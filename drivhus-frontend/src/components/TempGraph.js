import React from "react";
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
  const data = {
    labels: [
      "mandag",
      "tirsdag",
      "onsdag",
      "torsdag",
      "fredag",
      "lørdag",
      "søndag"
    ],
    datasets: [
      {
        label: "Temp historik",
        data: [2, 5, 7, 2, 4, 6, 8],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.5
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
        max: 35
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options}></Line>
      <p>xd</p>
    </div>
  );
}

export default TempGraph;

