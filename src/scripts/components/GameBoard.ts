import { GameWord } from '../interfaces';

function GameBoard(gameData: Array<GameWord>): HTMLDivElement {
    console.log(gameData);
    const gameBoard = document.createElement('div');
    gameBoard.className = 'board';

    for (let i = 0; i < 5; i++) {
        const gameRow = document.createElement('div');
        gameRow.className = 'board-row';

        for (let j = 0; j < 6; j++) {
            const gameCell = document.createElement('div');
            gameCell.className = 'board-cell';
            gameRow.append(gameCell);
        }

        gameBoard.append(gameRow);
    }

    return gameBoard;
}

export default GameBoard;
