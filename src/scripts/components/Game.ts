import { gameData } from '../data';
import { calculateGameAnswer } from '../utils/calculateGameAnswer';
import GameBoard from './GameBoard';
import GameHints from './GameHints';
import Timer from './Timer';
import { LocalStorageService } from '../utils/localStorageService';
import { formatDuration } from '../utils/formatDuration';

// Game component, contains GameBoard and GameHints.
function Game(): HTMLElement {
    const gameContainer = document.createElement('main');

    const timerMutationCallbacks: Array<(newElapsedTime: number) => void> = [];

    let gameStartTime = LocalStorageService.getGameStartTime();
    let gameElapsedTime = LocalStorageService.getGameElapsedTime(gameStartTime);
    gameStartTime = Date.now() - gameElapsedTime;

    const gameTimer = setInterval(() => {
        gameElapsedTime = Date.now() - gameStartTime;
        LocalStorageService.storeGameElapsedTime(gameElapsedTime);

        timerMutationCallbacks.forEach((cb) => cb(gameElapsedTime));
    }, 500);

    // Calculate result game board from gameData.
    const gameResult: Array<Array<string>> = calculateGameAnswer(gameData);
    // Initialize the array to store user inputs.
    const userInput: Array<Array<string>> = LocalStorageService.getUserInput();

    gameContainer.append(Timer(gameElapsedTime, timerMutationCallbacks));

    // Append GameBoard components.
    gameContainer.append(GameBoard(gameData, userInput));

    // Create Submit button.
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.className = 'submit-btn';
    // Checks the result against user input.
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

        if (isCorrect) {
            alert(
                `Congratulations ! You WON this game in ${formatDuration(gameElapsedTime)}.`
            );
            clearInterval(gameTimer);
            LocalStorageService.removeGameStartTime();
            LocalStorageService.removeGameElapsedTime();
        } else {
            alert('You answers are NOT correct.');
        }
    });

    // Append Submit button.
    gameContainer.append(submitButton);

    // Append GameHints component.
    gameContainer.append(GameHints(gameData));

    return gameContainer;
}

export default Game;
