import { Cell } from "../../types/cell";

export function createGameField(width: number, heigth: number): Cell[][] {
  const result = [];
  while (result.length < heigth) {
    result.push([]);
  }
  result.forEach((elem) => {
    while (elem.length < width) {
      elem.push(0);
    }
  });

  return result;
}
