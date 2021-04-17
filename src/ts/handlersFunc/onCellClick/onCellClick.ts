import { renderTable } from "../../renderFunc/renderTable/renderTable";
import { tableToArray } from "../../convertFunc/tableToArray";

export function onCellClick(
  cb: (y: number, x: number, state: number[][]) => number[][]
): void {
  const tableELem: HTMLTableElement = document.querySelector(".gameField");

  function callCbWithArgs(element): void {
    const y: number = element.target.cellIndex;
    const x: number = element.target.closest("tr").rowIndex;
    const table: HTMLTableElement = element.target.closest("table");
    const newField = cb(x, y, tableToArray(table));
    renderTable(newField);
  }

  tableELem.addEventListener("click", callCbWithArgs, true);
}
