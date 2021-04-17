export function tableToArray(table: HTMLTableElement): number[][] {
    let field: number[][] = [];

    for(let i = 0; i < table.rows.length; i = i + 1) {
        field.push([]);
        for(let j = 0; j < table.rows[i].cells.length; j = j + 1) {
            field[i].push(Number(table.rows[i].cells[j].innerText));
        }
    }
    return field;
}