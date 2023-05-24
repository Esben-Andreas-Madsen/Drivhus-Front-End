import validateHumi from "../../components/boundaryValue/ValidateHumi";

it("rejects max above 100", () => {
  expect(validateHumi(101, 50)).toBe(false);
});

it("rejects max below 1", () => {
  expect(validateHumi(-2, 50)).toBe(false);
});

it("rejects min above 99", () => {
  expect(validateHumi(50, 100)).toBe(false);
});

it("rejects min below 1", () => {
  expect(validateHumi(50, -2)).toBe(false);
});

it("rejects max below min", () => {
  expect(validateHumi(50, 51)).toBe(false);
});

it("rejects max not in increments of 0.5 or 1", () => {
  expect(validateHumi(52.3, 51)).toBe(false);
});

it("rejects min not in increments of 0.5 or 1", () => {
  expect(validateHumi(52, 51.3)).toBe(false);
});

it("rejects max and min being equal", () => {
  expect(validateHumi(50, 50)).toBe(false);
});

it("accepts valid max and min", () => {
  expect(validateHumi(50, 49)).toBe(true);
});

it("accept max: 70.5, min: 70", () => {
  expect(validateHumi(70.5, 70)).toBe(true);
});

it("accept max: 85, min: 70.5", () => {
  expect(validateHumi(85, 70.5)).toBe(true);
});

it("accept max: 52.5, min: 51.5", () => {
  expect(validateHumi(52.5, 51.5)).toBe(true);
});

it("rejects characters as input", () => {
  expect(validateHumi("a", "b")).toBe(false);
});

it("rejects characters as input part 2", () => {
  expect(validateHumi("b", "a")).toBe(false);
});
