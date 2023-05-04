import React from "react";
import ReactDOM from "react-dom/client";
import TempGraph from "../../components/tempGraph/TempGraph";
import "jest-environment-jsdom";

it("renders graph data", () => {
  const root = ReactDOM.createRoot(document.createElement("div"));
  root.render(<TempGraph />);
});
