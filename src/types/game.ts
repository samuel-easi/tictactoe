  export type Piece = 'X' | 'O' | null;

  export type Board = Piece[][];

  export interface CellPosition {
    row: number;
    col: number;
  }