import { renderTable } from './renderTable'
import { element } from '../../utils/utils'

document.body = element;

describe('Testing renderTable function', () => {
    const state: number[][] = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    renderTable(state);
    const table: HTMLTableElement = document.querySelector('.gameField');

    it('Table size must be equal fiald size', () => {
        expect(table.rows.length).toBe(3);
        expect(table.rows[0].cells.length).toBe(3);
    });
    it('Cells of table nust be equal field element', () => {
        expect(table.rows[0].cells[0].innerText).toBe('1');
        let result: number = 0;
        for(let i = 0; i < table.rows.length; i = i + 1) {
            for(let j = 0; j < table.rows[i].cells.length; j = j + 1) {
                result = result + Number(table.rows[i].cells[j].innerText);
            }
        }
        expect(result).toBe(1);
    })
})