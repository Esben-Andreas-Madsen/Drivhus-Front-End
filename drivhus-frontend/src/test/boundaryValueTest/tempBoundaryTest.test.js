import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TempBoundaries from "../../components/boundaryValue/tempBoundary/TempBoundaries";

/* const setup = () => {
  const utils = render(<TempBoundaries />);
  const maxInput = screen.getByLabelText("inputMaxField");
  const maxButton = screen.getByLabelText("inputMaxButton");
  return {
    maxInput,
    maxButton,
    ...utils,
  };
};

it("max: accepts 10 as a valid temp", () => {
  const { maxInput } = setup();
  fireEvent.change(maxInput, { target: { value: "10" } });
  expect(maxInput.value).toBe("10");
});

it("max: rejects 101 as a valid temp", () => {
  const { maxInput, maxButton } = setup();
  fireEvent.change(maxInput, { target: { value: "101" } });
  fireEvent.click(maxButton);
  expect(
    screen.getByText("Please input a number in the range of 0-100")
  ).toBeInTheDocument();
});

it("max: rejects 50.2 as a valid temp", () => {
  const { maxInput, maxButton } = setup();
  fireEvent.change(maxInput, { target: { value: "50.2" } });
  fireEvent.click(maxButton);
  expect(
    screen.getByText(
      "Invalid input, please enter a number in the range of 0-100 and in 0.5 - 1 increments"
    )
  ).toBeInTheDocument();
}); */

it("xd", () => {
  expect(2 + 2).toBe(4);
});
