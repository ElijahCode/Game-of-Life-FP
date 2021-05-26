import { createGameField } from "../createGameField/createGameField";

export function changeSizeofField(
  width: number,
  heigth: number,
  state: number[][]
): number[][] {
  const newState = createGameField(width, heigth);

  return newState.map((row: number[], y) =>
    row.map((_, x) => {
      let newCell: number;
      if (state[y] && state[y][x]) {
        newCell = state[y][x];
      } else {
        newCell = 0;
      }
      return newCell;
    })
  );
}
