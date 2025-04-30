import { GameWord } from '../interfaces';

function GameHints(gameData: Array<GameWord>): HTMLDivElement {
    const gameHints = document.createElement('div');
    gameHints.className = 'hints';

    const horizontalWordsHints = document.createElement('div');
    const horizontalWordsHintsHeader = document.createElement('p');
    horizontalWordsHintsHeader.textContent = 'ACROSS';
    horizontalWordsHintsHeader.className = 'hint-header';
    const horizontalWordsHintsList = document.createElement('ul');

    horizontalWordsHints.append(horizontalWordsHintsHeader);
    horizontalWordsHints.append(horizontalWordsHintsList);

    const verticalWordsHints = document.createElement('div');
    const verticalWordsHintsHeader = document.createElement('p');
    verticalWordsHintsHeader.textContent = 'DOWN';
    verticalWordsHintsHeader.className = 'hint-header';
    const verticalWordsHintsList = document.createElement('ul');

    verticalWordsHints.append(verticalWordsHintsHeader);
    verticalWordsHints.append(verticalWordsHintsList);

    for (let i = 0; i < gameData.length; i++) {
        const gameWord = gameData[i];
        const hintMessage = `${gameWord.index}. ${gameWord.clue}`;
        const hintEntry = document.createElement('li');
        hintEntry.textContent = hintMessage;

        if (gameWord.dir === 'horizontal') {
            horizontalWordsHintsList.append(hintEntry);
        } else {
            verticalWordsHintsList.append(hintEntry);
        }
    }

    gameHints.append(horizontalWordsHints);
    gameHints.append(verticalWordsHints);

    return gameHints;
}

export default GameHints;
