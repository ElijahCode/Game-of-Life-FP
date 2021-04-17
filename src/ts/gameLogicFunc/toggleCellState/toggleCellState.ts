export function toggleCellState(
  y: number,
  x: number,
  field: number[][]
): number[][] {
  const newField = field.map((row: number[], cellY: number) =>
    row.map((cell: number, cellX) => {
      let newCell;
      if (cellX === x && cellY === y) {
        newCell = cell === 0 ? 1 : 0;
      } else {
        newCell = cell;
      }
      return newCell;
    })
  );
  return newField;
}
