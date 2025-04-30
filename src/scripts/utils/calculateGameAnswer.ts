import { COLS, ROWS } from '../data';
import { GameWord } from '../interfaces';

// Calculate the Result game board from gameData.
export function calculateGameAnswer(
    gameData: Array<GameWord>
): Array<Array<string>> {
    const gameAnswer: Array<Array<string>> = [];

    // Fill the gameAnswer with empty strings.
    for (let i = 0; i < ROWS; i++) {
        gameAnswer.push([]);
        for (let j = 0; j < COLS; j++) {
            gameAnswer[i].push('');
        }
    }

    // Iterate over each word in game data and fill the gameAnswer from it.
    for (const gameWord of gameData) {
        const word = gameWord.word.split('');
        let rowI = gameWord.row - 1;
        let colI = gameWord.col - 1;

        for (const c of word) {
            gameAnswer[rowI][colI] = c;
            if (gameWord.dir === 'horizontal') colI++;
            else rowI++;
        }
    }

    return gameAnswer;
}
