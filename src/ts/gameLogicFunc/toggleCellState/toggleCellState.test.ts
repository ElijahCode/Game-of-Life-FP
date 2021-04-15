import { toggleCellState } from './toggleCellState';
import { Cell } from '../../types/cell';

describe("Testing toggleCellState function", () => {

    const state: Cell[][] = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    
    it('State cell must change', () => {
        let newState: Cell[][] = toggleCellState(0, 0, state);
        newState = toggleCellState(1, 1, newState);
        expect(newState).toStrictEqual([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ])
    })
})