export function getNumbAliveCell(y: number, x: number, field: number[][]): number {
    let sum: number = 0;
    for(let i = y - 1; i < y + 2; i = i + 1) {
        for(let j = x - 1; j < x + 2; j = j + 1) {
            if(i === y && j === x) {
                sum = sum + 0;
            } else if(field[i] && field[i][j]) {
                sum = sum + 1;
            }
        }
    }
    return sum;
}