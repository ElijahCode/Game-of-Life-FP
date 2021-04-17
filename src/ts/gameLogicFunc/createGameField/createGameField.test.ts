import { createGameField } from "./createGameField";
import { Cell } from "../../types/cell";

describe("Test createGameField function", () => {
  const widht: number = Math.floor(1 + Math.random() * 100);
  const heigth: number = Math.floor(1 + Math.random() * 100);

  const gameField = createGameField(widht, heigth);

  it("Return field with sizes heigth x width", () => {
    expect(gameField.length).toBe(heigth);
    expect(gameField[0].length).toBe(widht);
  });

  it("All cell is equal to 0", () => {
    const reuslt: number = gameField.reduce((acc: number, row: Cell[]) => {
      const sum: number = row.reduce(
        (rowSum: number, cell: number) => rowSum + cell,
        0
      );
      return acc + sum;
    }, 0);
    expect(reuslt).toBe(0);
  });
});
