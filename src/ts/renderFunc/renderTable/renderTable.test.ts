import { renderTable } from "./renderTable";
import { element } from "../../utils/utils";

document.body = element;

describe("Testing renderTable function", () => {
  const state: number[][] = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
  ];

  renderTable(state);
  const table: HTMLTableElement = document.querySelector(".gameField");

  it("Table size must be equal fiald size", () => {
    expect(table.rows.length).toBe(4);
    expect(table.rows[0].cells.length).toBe(4);
  });
  it("Cells of table must be equal field element", () => {
    expect(table.rows[0].cells[0].innerText).toBe("1");
    let result = 0;
    for (let i = 0; i < table.rows.length; i += 1) {
      for (let j = 0; j < table.rows[i].cells.length; j += 1) {
        result += Number(table.rows[i].cells[j].innerText);
      }
    }
    expect(result).toBe(5);
  });
  it("Cell must contain right classes", () => {
    expect(
      document.querySelectorAll(".cell.cell-one-step-to-death").length
    ).toBe(1);
    expect(document.querySelectorAll(".cell.cell-alive").length).toBe(4);
    expect(document.querySelectorAll(".cell.cell-dead").length).toBe(11);
  });
});
