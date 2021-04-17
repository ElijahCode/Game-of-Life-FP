import { getNextGeneration } from "../getNextGeneration/getNextGeneration";

export function getOneStepDeathCells(field: number[][]): number[][] {
  const nextGenerationField = getNextGeneration(field);
  return nextGenerationField.map((row, y) =>
    row.map((cell, x) => {
      let cellState;
      if (field[y][x] === 1 && nextGenerationField[y][x] === 0) {
        cellState = 1;
      } else {
        cellState = 0;
      }

      return cellState;
    })
  );
}
