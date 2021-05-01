import { createGameField } from "./createGameField";

describe("Test createGameField function", () => {
  const width = Math.floor(1 + Math.random() * 100);
  const heigth = Math.floor(1 + Math.random() * 100);

  const gameField = createGameField(width, heigth);

  it("Return field with sizes heigth x width", () => {
    expect(gameField.length).toBe(heigth);
    expect(gameField[0].length).toBe(width);
  });

  it("All cell is equal to 0", () => {
    const reuslt = gameField.reduce((acc: number, row: number[]) => {
      const sum = row.reduce(
        (rowSum: number, cell: number) => rowSum + cell,
        0
      );
      return acc + sum;
    }, 0);
    expect(reuslt).toBe(0);
  });
});
