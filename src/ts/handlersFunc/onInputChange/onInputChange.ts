import { tableToArray } from "../../convertFunc/tableToArray";
import { renderTable } from "../../renderFunc/renderTable/renderTable";

export function onInputChange(
  cb: (width: number, height: number, state: number[][]) => number[][]
): void {
  const tableElem: HTMLTableElement = document.querySelector(".gameField");
  const gameControllersBlock: HTMLDivElement = document.querySelector(
    ".gameControllers"
  );

  function addCbWithArgs(element): void {
    let width: number;
    let heigth: number;

    if (element.target.classList[1] === "input-width") {
      width = Number(element.target.value) >= 0 ? Number(element.target.value) : -Number(element.target.value);
      heigth = tableElem.rows.length;
    } else {
      heigth = Number(element.target.value) >= 0 ? Number(element.target.value) : -Number(element.target.value);
      width = tableElem.rows[0].cells.length;
    }
    const newField = cb(width, heigth, tableToArray(tableElem));
    renderTable(newField);
  }

  gameControllersBlock.addEventListener("change", addCbWithArgs, true);
}
