export function renderOneStepToDeathCells(field: number[][]): void {
    const table: HTMLTableElement = document.querySelector('.gameField');
    field.forEach(
        (row, y) => {
            row.forEach(
                (cell, x) => {
                    if(field[y][x] === 1){
                        table.rows[y].cells[x].classList.remove('cell-alive');
                        table.rows[y].cells[x].classList.add('cell-one-step-to-death');
                    }
                }
            )
        }
    )
}