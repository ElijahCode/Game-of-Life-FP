import { createGameField } from "../createGameField/createGameField";

export function changeSizeofField (width: number, heigth: number, state: number[][]): number[][] {
    let newState: number[][] = createGameField(width, heigth);

    return newState.map(
        (row: number[], y) => {
            return row.map(
                (cell: number, x) => {
                    let newCell: number;
                    if(state[y] && state[y][x]) {
                        newCell = state[y][x];
                    } else {
                        newCell = 0;
                    }
                    return newCell;
                }
            )
        }
    )
}