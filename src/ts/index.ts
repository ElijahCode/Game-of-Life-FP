import {createGameField} from './gameLogicFunc/createGameField/createGameField'
import {getNextGeneration} from './gameLogicFunc/getNextGeneration/getNextGeneration'
import {renderTable} from './renderFunc/renderTable/renderTable'
import {onCellClick} from "./handlersFunc/onCellClick/onCellClick"
import {onInputChange} from './handlersFunc/onInputChange/onInputChange'
import {toggleCellState} from './gameLogicFunc/toggleCellState/toggleCellState'
import {changeSizeofField} from './gameLogicFunc/changeSizeofField/changeSizeofField'
import {tableToArray} from './convertFunc/tableToArray'
import {BASIC_GAME_FIELD_HEIGTH, BASIC_GAME_FIELD_WIDTH, BASIC_GAME_TIME_STEP_DURATION_MS} from './config/config'


export function game() {
    let isGameRunning = false;
    let stepDuration = BASIC_GAME_TIME_STEP_DURATION_MS;
    let setIntervalId;

    const gameField = createGameField(BASIC_GAME_FIELD_WIDTH, BASIC_GAME_FIELD_HEIGTH);
    renderTable(gameField);

    onCellClick(toggleCellState);
    onInputChange(changeSizeofField);

    function onButtonClick() {

        const button: HTMLButtonElement = document.querySelector('.button');
        
        function buttonHandler(element) {
            let gameRunState: boolean;
            if(element.target.innerText === "Play") {
                element.target.innerText = 'Stop';
                element.target.clasList.remove('button-running');
                element.target.clasList.add('button-stopped');

                gameRunState = false;
            } else {
                element.target.innerText = 'Play';
                element.target.clasList.remove('button-stopped');
                element.target.clasList.add('button-running');

                gameRunState = true;

                setIntervalId = setInterval(() => {
                    const table: HTMLTableElement = document.querySelector('.gameField'); 
                    const runTimeGameField = tableToArray(table);
                    const newField = getNextGeneration(runTimeGameField);

                    renderTable(newField);

                }, stepDuration);
            }
            isGameRunning = gameRunState;
        }

        button.addEventListener('click', buttonHandler);
    }

    onButtonClick();
}