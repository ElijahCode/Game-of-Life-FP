import { changeSizeofField } from './changeSizeofField'

describe("Testing changeSizeofField", () => {
    let state: number[][] = [
        [1, 0],
        [0, 0],
        [1, 1]
    ];
    const width: number = 1 + Math.floor(Math.random() * 10);
    const heigth: number = 1 + Math.floor(Math.random() * 10);

    const newState: number[][] = changeSizeofField(width, heigth, state);

    it("Must return newField", () => {
        expect(newState.length).toBe(heigth);
        expect(newState[0].length).toBe(width);
    });

    it('Cells must not change', () => {
        expect(state[0][0]).toBe(newState[0][0]);
        expect(state[2][0]).toBe(newState[2][1]);
        expect(newState.reduce(
            (rowSum: number, currRow: number[]) => {
                return rowSum + currRow.reduce(
                    (acc: number, currCell: number) => {
                        return acc + currCell;
                    }, 0)
            }, 0)
        ).toBe(3);
    })
})