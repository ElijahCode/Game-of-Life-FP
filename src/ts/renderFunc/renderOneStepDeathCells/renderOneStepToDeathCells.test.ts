import {renderOneStepToDeathCells} from './renderOneStepToDeathCells'
import {renderTable} from '../renderTable/renderTable'
import {getOneStepDeathCells} from '../../gameLogicFunc/getOneStepDeathCells/getOneStepDeathCells'
import {element} from '../../utils/utils'

document.body = element;

const table: HTMLTableElement = document.querySelector('.gameField');

const state = [
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 1]
];

renderTable(state);

describe('Testing renderOneToDeathCells', () => {
    renderOneStepToDeathCells(getOneStepDeathCells(state))
    it('Cell must have class cell-one-step-to-death', () => {
        expect(table.rows[0].cells[0].classList[1]).toBe('cell-one-step-to-death');
    }) 
})