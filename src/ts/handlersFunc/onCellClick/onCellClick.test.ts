import { onCellClick } from './onCellClick'
import { toggleCellState } from '../../gameLogicFunc/toggleCellState/toggleCellState'
import { element } from '../../utils/utils'
import { renderTable } from '../../renderFunc/renderTable/renderTable'

document.body = element;
const table: HTMLTableElement = document.querySelector('.gameField');

let state = [
    [0, 1],
    [0, 0]
]

renderTable(state);

describe('Testing onCellClickFunc', () => {
    onCellClick(toggleCellState);
    it('Toggle 0 to 1', () => {
        table.rows[0].cells[0].dispatchEvent(
            new Event(
                'click',
                {bubbles: true},
            )
        )
        expect(table.rows[0].cells[0].innerText).toBe("1");
    })
    it('Toggle 1 to 0', () => {
        table.rows[0].cells[1].dispatchEvent(
            new Event(
                'click',
                {bubbles: true},
            )
        )
        expect(table.rows[0].cells[1].innerText).toBe("0");
    }) 
})