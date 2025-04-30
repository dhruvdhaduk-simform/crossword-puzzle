import { GameWord } from '../interfaces';
import { getDisabledCells } from '../utils/getDisabledCells';

function GameBoard(gameData: Array<GameWord>): HTMLDivElement {
    const disabledCells = getDisabledCells(gameData);

    const gameBoard = document.createElement('div');
    gameBoard.className = 'board';

    const gameBoardCells: Array<Array<HTMLDivElement>> = [];

    for (let i = 0; i < 5; i++) {
        const gameRow = document.createElement('div');
        gameRow.className = 'board-row';

        gameBoardCells.push([]);

        for (let j = 0; j < 6; j++) {
            const gameCell = document.createElement('div');
            gameCell.className = 'board-cell';
            gameRow.append(gameCell);

            gameBoardCells[i].push(gameCell);
        }

        gameBoard.append(gameRow);
    }

    for (const disabledCell of disabledCells) {
        gameBoardCells[disabledCell.row - 1][
            disabledCell.col - 1
        ].classList.add('disabled');
    }

    for (const gameWord of gameData) {
        const gameBoardCell =
            gameBoardCells[gameWord.row - 1][gameWord.col - 1];

        const boardCellIndex = document.createElement('span');
        boardCellIndex.textContent = `${gameWord.index}`;
        boardCellIndex.className = 'board-cell-number';

        gameBoardCell.append(boardCellIndex);
    }

    for (let i = 0; i < gameBoardCells.length; i++) {
        for (const gameBoardCell of gameBoardCells[i]) {
            if (!gameBoardCell.classList.contains('disabled')) {
                const cellInput = document.createElement('input');
                cellInput.type = 'text';
                cellInput.className = 'board-cell-input';
                cellInput.maxLength = 1;

                cellInput.addEventListener('input', () => {
                    let value = cellInput.value.trim()[0];
                    if (value) {
                        value = value.toUpperCase();
                        const valueCharCode = value.charCodeAt(0);
                        if (
                            valueCharCode >= 'A'.charCodeAt(0) &&
                            valueCharCode <= 'Z'.charCodeAt(0)
                        )
                            cellInput.value = value;
                        else cellInput.value = '';
                    } else {
                        cellInput.value = '';
                    }
                });

                gameBoardCell.append(cellInput);
            }
        }
    }

    return gameBoard;
}

export default GameBoard;
