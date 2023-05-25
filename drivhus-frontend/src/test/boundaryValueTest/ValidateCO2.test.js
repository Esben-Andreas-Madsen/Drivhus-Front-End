import validateCO2 from "../../components/boundaryValue/ValidateCO2";

it("rejects max above 800", () => {
  expect(validateCO2(801, 400)).toBe(false);
});

it("rejects max below 401", () => {
  expect(validateCO2(400, 402)).toBe(false);
});

it("rejects min above 799", () => {
  expect(validateCO2(450, 800)).toBe(false);
});

it("rejects min below 400", () => {
  expect(validateCO2(450, 399)).toBe(false);
});

it("rejects max below min", () => {
  expect(validateCO2(450, 451)).toBe(false);
});

it("rejects max not in increments of 1", () => {
  expect(validateCO2(455.3, 451)).toBe(false);
});

it("rejects min not in increments of 1", () => {
  expect(validateCO2(455, 451.3)).toBe(false);
});

it("rejects max and min being equal", () => {
  expect(validateCO2(450, 450)).toBe(false);
});

it("accepts valid max and min", () => {
  expect(validateCO2(450, 449)).toBe(true);
});

it("rejects wrong input type", () => {
  expect(validateCO2("a", "b")).toBe(false);
});

it("rejects wrong input type reversed", () => {
  expect(validateCO2("b", "a")).toBe(false);
});

it("accepts double string number input", () => {
  expect(validateCO2("450", "449")).toBe(true);
});

it("accepts single string number input", () => {
  expect(validateCO2("450", 449)).toBe(true);
});
