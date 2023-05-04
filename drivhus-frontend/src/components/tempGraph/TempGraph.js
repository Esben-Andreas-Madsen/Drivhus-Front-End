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
  //Udskiftes senere med API fetch til Cloud
  const tempData = [2, 5, 7, 2, 4, 6, 8];
  const tempReadings = tempData.map(function (elem) {
    return elem;
  });

  const tempLabelData = [
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag",
    "søndag",
  ];
  const tempLabels = tempLabelData.map(function (elem) {
    return elem;
  });

  /*---------------------------------------------------------------------*/

  const data = {
    labels: tempLabels,
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
        min: -10,
        max: 35,
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
