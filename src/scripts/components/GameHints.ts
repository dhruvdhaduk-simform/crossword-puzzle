import { GameWord } from '../interfaces';

function GameHints(gameData: Array<GameWord>): HTMLDivElement {
    // Create element that is to be returned.
    const gameHints = document.createElement('div');
    gameHints.className = 'hints';

    // Create the section for Horizontal words with header and list.
    const horizontalWordsHints = document.createElement('div');
    const horizontalWordsHintsHeader = document.createElement('p');
    horizontalWordsHintsHeader.textContent = 'ACROSS';
    horizontalWordsHintsHeader.className = 'hint-header';
    horizontalWordsHintsHeader.role = 'heading';
    const horizontalWordsHintsList = document.createElement('ul');

    horizontalWordsHints.append(horizontalWordsHintsHeader);
    horizontalWordsHints.append(horizontalWordsHintsList);

    // Create the section for Vertical words with header and list.
    const verticalWordsHints = document.createElement('div');
    const verticalWordsHintsHeader = document.createElement('p');
    verticalWordsHintsHeader.textContent = 'DOWN';
    verticalWordsHintsHeader.className = 'hint-header';
    verticalWordsHintsHeader.role = 'heading';
    const verticalWordsHintsList = document.createElement('ul');

    verticalWordsHints.append(verticalWordsHintsHeader);
    verticalWordsHints.append(verticalWordsHintsList);

    // Iterate over each word in game data.
    for (let i = 0; i < gameData.length; i++) {
        // Create List item element to show a hint.
        const gameWord = gameData[i];
        const hintMessage = `${gameWord.index}. ${gameWord.clue}`;
        const hintEntry = document.createElement('li');
        hintEntry.textContent = hintMessage;

        // Append the list item on horizontal/vertical list.
        if (gameWord.dir === 'horizontal') {
            horizontalWordsHintsList.append(hintEntry);
        } else {
            verticalWordsHintsList.append(hintEntry);
        }
    }

    // Append horizontal and vertical lists.
    gameHints.append(horizontalWordsHints);
    gameHints.append(verticalWordsHints);

    return gameHints;
}

export default GameHints;
