import { COLS, ROWS } from '../data';
import { GameWord } from '../interfaces';
import { getDisabledCells } from '../utils/getDisabledCells';
import { LocalStorageService } from '../utils/localStorageService';

function GameBoard(
    gameData: Array<GameWord>,
    userInput: Array<Array<string>>
): HTMLDivElement {
    // Calculate the disabled cells from game data.
    const disabledCells = getDisabledCells(gameData);

    const gameBoard = document.createElement('div');
    gameBoard.className = 'board';

    // Hold the board cell elements.
    const gameBoardCells: Array<Array<HTMLDivElement>> = [];

    // Create the cell elements for grid.
    for (let i = 0; i < ROWS; i++) {
        const gameRow = document.createElement('div');
        gameRow.className = 'board-row';

        gameBoardCells.push([]);

        for (let j = 0; j < COLS; j++) {
            const gameCell = document.createElement('div');
            gameCell.className = 'board-cell';
            gameRow.append(gameCell);

            gameBoardCells[i].push(gameCell);
        }

        gameBoard.append(gameRow);
    }

    // Add class to disabled cells.
    for (const disabledCell of disabledCells) {
        gameBoardCells[disabledCell.row - 1][
            disabledCell.col - 1
        ].classList.add('disabled');
    }

    // Iterate over game data to add index number to cells.
    for (const gameWord of gameData) {
        const gameBoardCell =
            gameBoardCells[gameWord.row - 1][gameWord.col - 1];

        const boardCellIndex = document.createElement('span');
        boardCellIndex.textContent = `${gameWord.index}`;
        boardCellIndex.className = 'board-cell-number';

        gameBoardCell.append(boardCellIndex);
    }

    // Add Input fields to cells that are not disabled.
    for (let i = 0; i < gameBoardCells.length; i++) {
        for (let j = 0; j < gameBoardCells[i].length; j++) {
            const gameBoardCell = gameBoardCells[i][j];
            if (!gameBoardCell.classList.contains('disabled')) {
                // Create the input field.
                const cellInput = document.createElement('input');
                cellInput.type = 'text';
                cellInput.className = 'board-cell-input';
                cellInput.maxLength = 1;
                cellInput.ariaLabel = `Input for Cel at Row ${i + 1} Column ${j + 1}`;
                cellInput.value = userInput[i][j];

                cellInput.addEventListener('input', () => {
                    // Get the value of input field.
                    let value = cellInput.value.trim()[0];
                    // Add validations to value.
                    if (value) {
                        // Allow only alphabets in input field.
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

                    // Store the updated value to userInput array and localStorage.
                    userInput[i][j] = cellInput.value;
                    LocalStorageService.storeUserInput(userInput);
                });

                gameBoardCell.append(cellInput);
            }
        }
    }

    return gameBoard;
}

export default GameBoard;
