import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TempGraph from "./components/tempGraph/TempGraph";
import Root from "./routes/Root";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
