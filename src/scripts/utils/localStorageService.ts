const USER_INPUT_KEY = 'USER_INPUT_KEY';

export class LocalStorageService {
    static storeUserInput(userInput: Array<Array<string>>): void {
        localStorage.setItem(USER_INPUT_KEY, JSON.stringify(userInput));
    }

    static getUserInput(): Array<Array<string>> {
        const userInput: Array<Array<string>> = [];

        for (let i = 0; i < 5; i++) {
            userInput.push([]);
            for (let j = 0; j < 6; j++) {
                userInput[i].push('');
            }
        }

        const userInputParsed: unknown = JSON.parse(
            localStorage.getItem(USER_INPUT_KEY) || '[]'
        );

        if (Array.isArray(userInputParsed)) {
            for (let i = 0; i < userInputParsed.length; i++) {
                const userInputParsedRow = userInputParsed[i];
                if (
                    Array.isArray(userInputParsedRow) &&
                    userInputParsedRow.every((item) => typeof item === 'string')
                ) {
                    for (let j = 0; j < userInputParsedRow.length; j++) {
                        if (i >= 5 || j >= 6) continue;
                        const item = userInputParsedRow[j];
                        if (item.length !== 1) continue;
                        const itemCharCode = item.charCodeAt(0);
                        if (
                            item === '' ||
                            (itemCharCode >= 'A'.charCodeAt(0) &&
                                itemCharCode <= 'Z'.charCodeAt(0))
                        ) {
                            userInput[i][j] = item;
                        }
                    }
                }
            }
        }

        return userInput;
    }
}
