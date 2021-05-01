import { getNextGeneration } from "./getNextGeneration";

describe("Testing getNextGeneration function", () => {
  const state = [
    [1, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1],
  ];

  const newState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
  ];

  it("Must return field equal newState", () => {
    expect(getNextGeneration(state)).toStrictEqual(newState);
  });
});
