import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BoundaryValue from "../../components/boundaryValue/BoundaryValue";

const setup = () => {
  const utils = render(<BoundaryValue />);
  const tempMax = screen.getByLabelText("inputMaxTempField");
  const tempMin = screen.getByLabelText("inputMinTempField");
  const response = screen.getByLabelText("responseField");
  const submitBtn = screen.getByLabelText("submitBtn");
  return {
    tempMax,
    tempMin,
    submitBtn,
    response,
    ...utils,
  };
};

it("max: rejects 1.1 as a valid temp", () => {
  const { tempMax, submitBtn, response } = setup();
  fireEvent.change(tempMax, { target: { value: 1.1 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min."
  );
});

it("max: rejects 101 as a valid temp", () => {
  const { tempMax, submitBtn, response } = setup();
  fireEvent.change(tempMax, { target: { value: 101 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min."
  );
});

it("max: rejects -1 as a valid temp", () => {
  const { tempMax, submitBtn, response } = setup();
  fireEvent.change(tempMax, { target: { value: -1 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min."
  );
});

it("max: rejects 0 as a valid temp", () => {
  const { tempMax, submitBtn, response } = setup();
  fireEvent.change(tempMax, { target: { value: 0 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min."
  );
});

it("max: accepts 100 as a valid temp", () => {
  const { tempMax, submitBtn, response } = setup();
  fireEvent.change(tempMax, { target: { value: 100 } });
  fireEvent.click(submitBtn);
  expect(response).toHaveTextContent(
    "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min."
  );
});
