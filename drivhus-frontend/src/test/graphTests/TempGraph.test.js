import React from "react";
import ReactDOM from "react-dom/client";
import TempGraph from "../../components/graphs/tempGraph/TempGraph";
import "jest-environment-jsdom";

it("renders temp graph", () => {
  const root = ReactDOM.createRoot(document.createElement("div"));
  root.render(<TempGraph />);
});

it("xd", () => {
  expect(2 + 2).toBe(4);
});
