import { toggleCellState } from "./toggleCellState";

describe("Testing toggleCellState function", () => {
  const state = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  it("State cell must change", () => {
    let newState: number[][] = toggleCellState(0, 0, state);
    newState = toggleCellState(1, 1, newState);
    expect(newState).toStrictEqual([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });
});
