import validateTemp from "../../components/boundaryValue/ValidateTemp";

it("rejects max above 100", () => {
  const result = validateTemp(101, 50);
  expect(result).toBe(false);
});

it("rejects max below 2", () => {
  const result = validateTemp(1, 50);
  expect(result).toBe(false);
});

it("rejects min above 99", () => {
  const result = validateTemp(50, 100);
  expect(result).toBe(false);
});

it("rejects min below 1", () => {
  const result = validateTemp(50, 0);
  expect(result).toBe(false);
});

it("rejects min bigger than max", () => {
  const result = validateTemp(50, 51);
  expect(result).toBe(false);
});

it("rejects max not in increments of 0.5 and 1", () => {
  const result = validateTemp(50.4, 50);
  expect(result).toBe(false);
});

it("rejects min not in increments of 0.5 and 1", () => {
  const result = validateTemp(50, 50.4);
  expect(result).toBe(false);
});

it("rejects min equal to max", () => {
  const result = validateTemp(50, 50);
  expect(result).toBe(false);
});

it("acepts max: 70.5 and min: 50.5", () => {
  const result = validateTemp(70.5, 50.5);
  expect(result).toBe(true);
});

it("acepts max: 70 and min: 50", () => {
  const result = validateTemp(70, 50);
  expect(result).toBe(true);
});

it("acepts max: 70.5 and min: 50", () => {
  const result = validateTemp(70.5, 50);
  expect(result).toBe(true);
});

it("acepts max: 70 and min: 50.5", () => {
  const result = validateTemp(70, 50.5);
  expect(result).toBe(true);
});

it("rejects characters (b,a) at first check", () => {
  const result = validateTemp("b", "a");
  expect(result).toBe(false);
});

it("rejects characters (a,b) at first check", () => {
  const result = validateTemp("a", "b");
  expect(result).toBe(false);
});
