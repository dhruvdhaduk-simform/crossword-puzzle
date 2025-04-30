import { GameWord, Cell } from '../interfaces';

// Get the cells that are disabled from gameData.
export function getDisabledCells(gameData: Array<GameWord>): Array<Cell> {
    const disabledCells: Array<Cell> = [];

    const gameBoard: Array<Array<boolean>> = [];

    // Initialize the temporary gameBoard with 'false', which means all cells are disabled.
    for (let i = 0; i < 5; i++) {
        const gameBoardRow: Array<boolean> = [];
        for (let j = 0; j < 6; j++) {
            gameBoardRow.push(false);
        }
        gameBoard.push(gameBoardRow);
    }

    // Iterate over each word of game data to fill the gameBoard.
    for (const gameWord of gameData) {
        let rowI = gameWord.row - 1;
        let colI = gameWord.col - 1;

        for (let i = 0; i < gameWord.word.length; i++) {
            gameBoard[rowI][colI] = true;

            if (gameWord.dir === 'horizontal') colI++;
            else rowI++;
        }
    }

    // Push cell in disabledCell which are not marked in previous iteration.
    for (let i = 0; i < gameBoard.length; i++) {
        const gameBoardRow = gameBoard[i];

        for (let j = 0; j < gameBoardRow.length; j++) {
            if (!gameBoard[i][j]) {
                disabledCells.push({ row: i + 1, col: j + 1 });
            }
        }
    }

    return disabledCells;
}
