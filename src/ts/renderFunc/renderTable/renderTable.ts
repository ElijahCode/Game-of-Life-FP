export function renderTable(field: number[][]): void {
    const newTable: HTMLTableElement = document.querySelector('.gameField');

    while(newTable.rows && newTable.rows.length > 0) {
        newTable.deleteRow(-1);
    }

    while(newTable.rows.length < field.length) {
        newTable.insertRow(-1);
        while(newTable.rows[newTable.rows.length - 1].cells.length < field[0].length) {
            newTable.rows[newTable.rows.length - 1].insertCell(-1);
        }
    }

    field.forEach(
        (row: number[], y) => {
            row.forEach(
                (cell: number, x) => {
                    newTable.rows[y].cells[x].innerText = "" + cell;
                }
            )
        }
    )
}