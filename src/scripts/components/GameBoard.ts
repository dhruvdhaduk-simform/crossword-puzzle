import { GameWord } from '../interfaces';
import { getDisabledCells } from '../utils/getDisabledCells';

function GameBoard(gameData: Array<GameWord>): HTMLDivElement {
    const disabledCells = getDisabledCells(gameData);

    const gameBoard = document.createElement('div');
    gameBoard.className = 'board';

    for (let i = 0; i < 5; i++) {
        const gameRow = document.createElement('div');
        gameRow.className = 'board-row';

        for (let j = 0; j < 6; j++) {
            const gameCell = document.createElement('div');
            gameCell.className = 'board-cell';
            gameRow.append(gameCell);

            if (
                disabledCells.findIndex(
                    (item) => item.row - 1 === i && item.col - 1 === j
                ) !== -1
            ) {
                gameCell.classList.add('disabled');
            }
        }

        gameBoard.append(gameRow);
    }

    return gameBoard;
}

export default GameBoard;
