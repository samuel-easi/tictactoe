import type { Piece, Board, CellPosition } from "../types/game";

export function createEmptyBoard(size: number): Board {
  const board: Board = [];

  for (let i = 0; i < size; i++) {
    const row: Piece[] = [];
    for (let j = 0; j < size; j++) {
      row.push(null);
    }
    board.push(row);
  }

  return board;
}

export function isValidMove(board: Board, row: number, col: number): boolean {
  if (row < 0 || row >= board.length) return false;
  if (col < 0 || col >= board[row].length) return false;
  return board[row][col] === null;
}

export function getEmptyCells(board: Board): CellPosition[] {
  const emptyCells: CellPosition[] = [];

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
      if (board[rowIndex][colIndex] === null) {
        emptyCells.push({ row: rowIndex, col: colIndex });
      }
    }
  }

  return emptyCells;
}
