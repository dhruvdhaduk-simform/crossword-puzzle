import { gameData } from '../data';
import GameBoard from './GameBoard';
import GameHints from './GameHints';

function Game(): HTMLElement {
    const gameContainer = document.createElement('main');

    gameContainer.append(GameBoard(gameData));
    gameContainer.append(GameHints(gameData));

    return gameContainer;
}

export default Game;
