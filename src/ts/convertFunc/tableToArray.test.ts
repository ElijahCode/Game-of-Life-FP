import { tableToArray } from "./tableToArray";
import { renderTable } from "../renderFunc/renderTable/renderTable";
import { element } from "../utils/utils";

document.body = element;

const state: number[][] = [
  [0, 1, 0],
  [0, 0, 0],
  [1, 1, 1],
];

renderTable(state);

describe("Testing tableToArray function", () => {
  const table: HTMLTableElement = document.querySelector(".gameField");
  it("Must return field equal state", () => {
    expect(tableToArray(table)).toStrictEqual(state);
  });
});
