import { createGameField } from "./gameLogicFunc/createGameField/createGameField";
import { getNextGeneration } from "./gameLogicFunc/getNextGeneration/getNextGeneration";
import { renderTable } from "./renderFunc/renderTable/renderTable";
import { onCellClick } from "./handlersFunc/onCellClick/onCellClick";
import { onInputChange } from "./handlersFunc/onInputChange/onInputChange";
import { toggleCellState } from "./gameLogicFunc/toggleCellState/toggleCellState";
import { changeSizeofField } from "./gameLogicFunc/changeSizeofField/changeSizeofField";
import { tableToArray } from "./convertFunc/tableToArray";
import {
  BASIC_GAME_FIELD_HEIGTH,
  BASIC_GAME_FIELD_WIDTH,
  BASIC_GAME_TIME_STEP_DURATION_MS,
} from "./config/config";
import "./css/style.css";

function game() {
  let isGameRunning = false;
  let stepDuration = BASIC_GAME_TIME_STEP_DURATION_MS;
  let ID;

  const inputWidth: HTMLInputElement = document.querySelector(
    ".input.input-width"
  );
  const inputHeigth: HTMLInputElement = document.querySelector(
    ".input.input-heigth"
  );

  inputWidth.value = `${BASIC_GAME_FIELD_WIDTH}`;
  inputHeigth.value = `${BASIC_GAME_FIELD_HEIGTH}`;

  const gameField = createGameField(
    BASIC_GAME_FIELD_WIDTH,
    BASIC_GAME_FIELD_HEIGTH
  );

  renderTable(gameField);

  onCellClick(toggleCellState);
  onInputChange(changeSizeofField);

  function tick(): void {
    if (isGameRunning) {
      const table: HTMLTableElement = document.querySelector(".gameField");
      const runTimeGameField = tableToArray(table);
      const newField = getNextGeneration(runTimeGameField);
      renderTable(newField);

      const isGamePatternRepeat =
        JSON.stringify(runTimeGameField) ===
        JSON.stringify(getNextGeneration(newField));

      if (
        !(
          document.querySelectorAll(".cell-alive").length ||
          document.querySelectorAll(".cell-one-step-to-death").length
        ) ||
        isGamePatternRepeat
      ) {
        isGameRunning = false;
        const button: HTMLButtonElement = document.querySelector(".button");

        button.innerText = "Play";
        button.classList.remove("button-running");
        button.classList.add("button-stopped");

        clearInterval(ID);
      }
    }
  }

  function onButtonClick(): void {
    const button: HTMLButtonElement = document.querySelector(".button");

    function buttonHandler(element): void {
      if (element.target.innerText === "Play") {
        button.innerText = "Stop";
        button.classList.remove("button-running");
        button.classList.add("button-stopped");

        ID = setInterval(tick, stepDuration);
      } else {
        button.innerText = "Play";
        button.classList.remove("button-stopped");
        button.classList.add("button-running");

        clearInterval(ID);
      }
      isGameRunning = !isGameRunning;
    }
    button.addEventListener("click", buttonHandler);
  }

  function onGameSpeedChange(): void {
    const gameSpeedInput: HTMLInputElement = document.querySelector(
      ".input-game-speed"
    );

    function inputHandler(element) {
      const gameSpeedValue = Number(element.target.value);
      stepDuration =
        gameSpeedValue >= 0
          ? BASIC_GAME_TIME_STEP_DURATION_MS / (gameSpeedValue + 1)
          : BASIC_GAME_TIME_STEP_DURATION_MS * (-gameSpeedValue + 1);
    }

    gameSpeedInput.addEventListener("change", inputHandler);
  }

  onButtonClick();
  onGameSpeedChange();
}

game();
