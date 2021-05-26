export function tableToArray(table: HTMLTableElement): number[][] {
  const field: number[][] = [];

  for (let i = 0; i < table.rows.length; i += 1) {
    field.push([]);
    for (let j = 0; j < table.rows[i].cells.length; j += 1) {
      field[i].push(Number(table.rows[i].cells[j].innerText));
    }
  }
  return field;
}
