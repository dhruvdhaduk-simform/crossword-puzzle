import { GameWord } from '../interfaces';

export function calculateGameAnswer(
    gameData: Array<GameWord>
): Array<Array<string>> {
    const gameAnswer: Array<Array<string>> = [];

    for (let i = 0; i < 5; i++) {
        gameAnswer.push([]);
        for (let j = 0; j < 6; j++) {
            gameAnswer[i].push('');
        }
    }

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
