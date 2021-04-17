import { getOneStepDeathCells } from "./getOneStepDeathCells";
import { element } from "../../utils/utils";
import { renderTable } from "../../renderFunc/renderTable/renderTable";

document.body = element;

const state = [
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 1],
];

const deadCellsField = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

renderTable(state);

describe("Testing getOneStepDeathCells", () => {
  it("Must return field equal deadCellsField", () => {
    expect(getOneStepDeathCells(state)).toStrictEqual(deadCellsField);
  });
});
