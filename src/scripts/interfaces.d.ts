// Interface to hold a word that is to be predicted.
export interface GameWord {
    index: number;
    word: string;
    clue: string;
    row: number;
    col: number;
    dir: 'horizontal' | 'vertical';
}

export interface Cell {
    row: number;
    col: number;
}
