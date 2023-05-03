import React from "react";
import ReactDOM from "react-dom/client";
import TempGraph from "../components/TempGraph";

it("renders without crashing", () => {
  const root = ReactDOM.createRoot(document.createElement("div"));
  root.render(<TempGraph />);
});
