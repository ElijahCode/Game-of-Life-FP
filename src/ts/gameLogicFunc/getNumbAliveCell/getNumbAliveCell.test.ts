import { getNumbAliveCell } from "./getNumbAliveCell";

describe("Test getNumbAliveCell function", () => {
  const state = [
    [1, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1],
  ];
  it("Must return 1", () => {
    expect(getNumbAliveCell(0, 0, state)).toBe(1);
  });
  it("Must return 2", () => {
    expect(getNumbAliveCell(1, 1, state)).toBe(2);
  });
  it("Must return 3", () => {
    expect(getNumbAliveCell(2, 1, state)).toBe(3);
  });
});
