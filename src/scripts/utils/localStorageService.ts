import { COLS, ROWS } from '../data';

const USER_INPUT_KEY = 'USER_INPUT_KEY';
const GAME_START_TIME = 'GAME_START_TIME';
const GAME_ELAPSED_TIME = 'GAME_ELAPSED_TIME';

// Utility to Store and Retrive user input from localStorage.
export class LocalStorageService {
    // Store the user input in localStorage.
    static storeUserInput(userInput: Array<Array<string>>): void {
        localStorage.setItem(USER_INPUT_KEY, JSON.stringify(userInput));
    }

    // Parse the localStorage to get user input. Give empty strings if not valid.
    static getUserInput(): Array<Array<string>> {
        const userInput: Array<Array<string>> = [];

        // Initialize the userInput that is to be returned with empty strings.
        for (let i = 0; i < ROWS; i++) {
            userInput.push([]);
            for (let j = 0; j < COLS; j++) {
                userInput[i].push('');
            }
        }

        // Parse the stored user input from localStorage.
        const userInputParsed: unknown = JSON.parse(
            localStorage.getItem(USER_INPUT_KEY) || '[]'
        );

        // Validations to only use valid values from parsed user input.
        if (Array.isArray(userInputParsed)) {
            for (let i = 0; i < userInputParsed.length; i++) {
                const userInputParsedRow = userInputParsed[i];
                if (
                    Array.isArray(userInputParsedRow) &&
                    userInputParsedRow.every((item) => typeof item === 'string')
                ) {
                    for (let j = 0; j < userInputParsedRow.length; j++) {
                        if (i >= ROWS || j >= COLS) continue;
                        const item = userInputParsedRow[j];
                        // Discard input if it has more than 1 characters.
                        if (item.length !== 1) continue;

                        // Allow only empty string or capital alphabets.
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

    static storeGameStartTime(gameStartTime: number): void {
        localStorage.setItem(GAME_START_TIME, `${gameStartTime}`);
    }

    static getGameStartTime(): number {
        const gameStartTime = Number(
            localStorage.getItem(GAME_START_TIME) || Date.now()
        );
        this.storeGameStartTime(gameStartTime);

        return gameStartTime;
    }

    static removeGameStartTime(): void {
        localStorage.removeItem(GAME_START_TIME);
    }

    static storeGameElapsedTime(gameElapsedTime: number): void {
        localStorage.setItem(GAME_ELAPSED_TIME, `${gameElapsedTime}`);
    }

    static getGameElapsedTime(gameStartTime: number): number {
        const gameElapsedTime = Number(localStorage.getItem(GAME_ELAPSED_TIME));
        if (isNaN(gameElapsedTime) || !gameElapsedTime) {
            return Date.now() - gameStartTime;
        }

        return gameElapsedTime;
    }

    static removeGameElapsedTime(): void {
        localStorage.removeItem(GAME_ELAPSED_TIME);
    }
}
