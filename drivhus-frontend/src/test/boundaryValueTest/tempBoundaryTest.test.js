import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import BoundaryValue from "../../components/boundaryValue/BoundaryValue";
import { unmountComponentAtNode } from "react-dom";

function dummyValues() {
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  fireEvent.change(maxTemp, { target: { value: 100 } });

  const minTemp = screen.getByLabelText("inputMinTempField");
  fireEvent.change(minTemp, { target: { value: 1 } });

  const maxHumi = screen.getByLabelText("inputMaxHumiField");
  fireEvent.change(maxHumi, { target: { value: 100 } });

  const minHumi = screen.getByLabelText("inputMinHumiField");
  fireEvent.change(minHumi, { target: { value: 1 } });

  const maxCO2 = screen.getByLabelText("inputMaxCO2Field");
  fireEvent.change(maxCO2, { target: { value: 800 } });

  const minCO2 = screen.getByLabelText("inputMinCO2Field");
  fireEvent.change(minCO2, { target: { value: 400 } });
}

it("rejects -1", async () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: -1 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min, max != min."
  );
});

it("max: rejects 101 as a valid temp", () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: 101 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min, max != min."
  );
});

it("max: rejects 100.5 as a valid temp", () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: 100.5 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min, max != min."
  );
});

it("max: rejects 0 as a valid temp", () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: 0 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min, max != min."
  );
});

it("max: rejects 70.7 as a valid temp", () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: 70.7 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min, max != min."
  );
});

it("max & min: rejects 50 and 50 as a valid temp", () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const minTemp = screen.getByLabelText("inputMinTempField");

  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");

  fireEvent.change(maxTemp, { target: { value: 50 } });
  fireEvent.change(minTemp, { target: { value: 50 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min, max != min."
  );
});
