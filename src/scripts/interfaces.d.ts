export interface GameWord {
    index: number;
    word: string;
    clue: string;
    row: number;
    col: number;
    dir: 'horizontal' | 'vertical';
}
