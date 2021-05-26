import { getNumbAliveCell } from "../getNumbAliveCell/getNumbAliveCell";

export function getNextGeneration(state: number[][]): number[][] {
  return state.map((row: number[], y) =>
    row.map((cell: number, x) => {
      const numberAliveCell: number = getNumbAliveCell(y, x, state);
      let cellState;
      if (
        (numberAliveCell === 3 && state[y][x] === 0) ||
        ((numberAliveCell === 2 || numberAliveCell === 3) && state[y][x] === 1)
      ) {
        cellState = 1;
      } else {
        cellState = 0;
      }
      return cellState;
    })
  );
}
