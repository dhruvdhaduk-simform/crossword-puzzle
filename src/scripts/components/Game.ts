import { gameData } from '../data';
import { calculateGameAnswer } from '../utils/calculateGameAnswer';
import GameBoard from './GameBoard';
import GameHints from './GameHints';

function Game(): HTMLElement {
    const gameContainer = document.createElement('main');

    const gameResult: Array<Array<string>> = calculateGameAnswer(gameData);
    const userInput: Array<Array<string>> = [];

    for (let i = 0; i < 5; i++) {
        userInput.push([]);
        for (let j = 0; j < 6; j++) {
            userInput[i].push('');
        }
    }

    gameContainer.append(GameBoard(gameData, userInput));

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.className = 'submit-btn';
    submitButton.addEventListener('click', () => {
        let isCorrect = true;
        outer: for (let i = 0; i < gameResult.length; i++) {
            for (let j = 0; j < gameResult[i].length; j++) {
                if (userInput[i][j] !== gameResult[i][j]) {
                    isCorrect = false;
                    break outer;
                }
            }
        }

        if (isCorrect) alert('Congratulations ! You WON this game.');
        else alert('You answers are NOT correct.');
    });

    gameContainer.append(submitButton);

    gameContainer.append(GameHints(gameData));

    return gameContainer;
}

export default Game;
