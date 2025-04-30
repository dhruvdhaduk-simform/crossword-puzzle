import { gameData } from '../data';
import GameBoard from './GameBoard';

function Game(): HTMLElement {
    const gameContainer = document.createElement('main');

    gameContainer.append(GameBoard(gameData));

    return gameContainer;
}

export default Game;
