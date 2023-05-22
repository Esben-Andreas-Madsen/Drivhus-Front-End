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

it("max: accepts 1 as a valid temp", () => {
  const { tempMax, submitBtn } = setup();
  fireEvent.change(tempMax, { target: { value: "1" } });
  fireEvent.click(submitBtn);
  expect(
    screen.getByText(
      "Temperature must be in the range of 0-100 and in 0.5 - 1 increments, and max > min."
    )
  ).toBeInTheDocument();
});
