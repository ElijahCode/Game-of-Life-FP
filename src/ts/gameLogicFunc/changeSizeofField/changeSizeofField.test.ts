import { changeSizeofField } from "./changeSizeofField";

describe("Testing changeSizeofField", () => {
  const state = [
    [1, 0],
    [0, 0],
    [1, 1],
  ];
  const width = 2 + Math.floor(Math.random() * 10);
  const heigth = 3 + Math.floor(Math.random() * 10);

  const newState = changeSizeofField(width, heigth, state);

  it("Must return newField", () => {
    expect(newState.length).toBe(heigth);
    expect(newState[0].length).toBe(width);
  });
  it("Cells must not change", () => {
    expect(state[0][0]).toBe(newState[0][0]);
    expect(state[2][0]).toBe(newState[2][0]);
    expect(state[2][1]).toBe(newState[2][1]);
  });
});
