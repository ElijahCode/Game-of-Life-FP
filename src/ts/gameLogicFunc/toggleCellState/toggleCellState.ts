export function toggleCellState(y: number, x: number, field: number[][]): number[][] {
    const newField = field.map((row: number[], cellY: number) => {
        return row.map((cell, cellX) => {
            if(cellX === x && cellY === y) {
                cell = cell === 0 ? 1 : 0;
            }
            return cell;
        });
    })
    return newField;
}