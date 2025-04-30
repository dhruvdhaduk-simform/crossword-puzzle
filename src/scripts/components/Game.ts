import { gameData } from '../data';
import GameBoard from './GameBoard';
import GameHints from './GameHints';

function Game(): HTMLElement {
    const gameContainer = document.createElement('main');

    const userInput: Array<Array<string>> = [];

    for (let i = 0; i < 5; i++) {
        userInput.push([]);
        for (let j = 0; j < 6; j++) {
            userInput[i].push('');
        }
    }

    gameContainer.append(GameBoard(gameData, userInput));
    gameContainer.append(GameHints(gameData));

    return gameContainer;
}

export default Game;
