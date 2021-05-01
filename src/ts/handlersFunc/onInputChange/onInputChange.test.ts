import { onInputChange } from "./onInputChange";
import { changeSizeofField } from "../../gameLogicFunc/changeSizeofField/changeSizeofField";
import { renderTable } from "../../renderFunc/renderTable/renderTable";
import { element } from "../../utils/utils";

document.body = element;
const table: HTMLTableElement = document.querySelector(".gameField");

const state: number[][] = [
  [0, 0],
  [0, 0],
];

renderTable(state);

describe("TestingInputChange function", () => {
  const widthInput: HTMLInputElement = document.querySelector(".input-width");
  const heigthInput: HTMLInputElement = document.querySelector(".input-heigth");

  onInputChange(changeSizeofField);

  it("table width must be 3", () => {
    widthInput.value = "3";
    widthInput.dispatchEvent(new Event("change", { bubbles: true }));
    expect(table.rows[0].cells.length).toBe(3);
    expect(table.rows[1].cells.length).toBe(3);
  });
  it("table height must be 3", () => {
    heigthInput.value = "3";
    heigthInput.dispatchEvent(new Event("change", { bubbles: true }));
    expect(table.rows.length).toBe(3);
  });
  it('Table width must be 4', () => {
    widthInput.value = "-4";
    widthInput.dispatchEvent(new Event("change", { bubbles: true }));
    expect(table.rows[0].cells.length).toBe(4);
    expect(table.rows[1].cells.length).toBe(4);
  })
  it("table height must be 4", () => {
    heigthInput.value = "-4";
    heigthInput.dispatchEvent(new Event("change", { bubbles: true }));
    expect(table.rows.length).toBe(4);
  });
});
