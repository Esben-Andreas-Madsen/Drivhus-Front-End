import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BoundaryValue from "../../components/boundaryValue/BoundaryValue";

//Metoder der indsætter valide dummy-data som kan overskrides så specifikke felter kan isoleres
//Bruges til at isolere værdier så de kan testes
function dummyValues() {
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  fireEvent.change(maxTemp, { target: { value: 100 } });

  const minTemp = screen.getByLabelText("inputMinTempField");
  fireEvent.change(minTemp, { target: { value: 0.5 } });

  const maxHumi = screen.getByLabelText("inputMaxHumiField");
  fireEvent.change(maxHumi, { target: { value: 100 } });

  const minHumi = screen.getByLabelText("inputMinHumiField");
  fireEvent.change(minHumi, { target: { value: 0.5 } });

  const maxCO2 = screen.getByLabelText("inputMaxCO2Field");
  fireEvent.change(maxCO2, { target: { value: 800 } });

  const minCO2 = screen.getByLabelText("inputMinCO2Field");
  fireEvent.change(minCO2, { target: { value: 400 } });
}

//Alle fejlvalideringer for min- og max temperatur giver følgende besked
const tempErrorMsg =
  "Temperature must be in the range of 0.5-100 and in 0.5 - 1 increments, max value must be bigger than min and they can't be the same.";

/* ---------------------------------------------------------------------------------------------------------*/
/* -------------------------------------- MAX TEMPERATURE INPUT TESTS --------------------------------------*/
/* ---------------------------------------------------------------------------------------------------------*/

it("rejects -1", async () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: -1 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(tempErrorMsg);
});

it("max: rejects 101 as a valid temp", () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: 101 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(tempErrorMsg);
});

it("max: rejects 100.5 as a valid temp", () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: 100.5 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(tempErrorMsg);
});

it("max: rejects 0 as a valid temp", () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: 0 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(tempErrorMsg);
});

it("max: rejects 70.7 as a valid temp", () => {
  render(<BoundaryValue />);
  dummyValues();
  const maxTemp = screen.getByLabelText("inputMaxTempField");
  const submitBtn = screen.getByLabelText("submitBtn");
  const response = screen.getByLabelText("responseField");
  fireEvent.change(maxTemp, { target: { value: 70.7 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(tempErrorMsg);
});

/* ---------------------------------------------------------------------------------------------------------*/
/* -------------------------------------- MIN TEMPERATURE INPUT TESTS --------------------------------------*/
/* ---------------------------------------------------------------------------------------------------------*/

/* -------------------------------------- MAX & MIN TEMPERATURE INPUT TESTS --------------------------------------*/

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
  expect(response).toHaveTextContent(tempErrorMsg);
});
