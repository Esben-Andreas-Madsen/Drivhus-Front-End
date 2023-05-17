import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TempGraph from "./components/graphs/tempGraph/TempGraph";
import HumiGraph from "./components/graphs/humiGraph/HumiGraph";
import CO2Graph from "./components/graphs/CO2Graph/CO2Graph";
import Root from "./routes/Root";
import Boundaries from "./components/boundaryValue/boundaries";

import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/tempgraph",
        element: <TempGraph />,
      },
      {
        path: "/humigraph",
        element: <HumiGraph />,
      },
      {
        path: "/co2graph",
        element: <CO2Graph />,
      },
      {
        path: "/boundaries",
        element: <Boundaries />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
