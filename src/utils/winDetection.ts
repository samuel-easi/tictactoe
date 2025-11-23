import type { Piece, Board } from "../types/game";

export function checkWinner(board: Board, winLength: number): Piece | null {
  const size = board.length;

  const xWins = checkWin(board, "X", size, winLength);
  if (xWins) return "X";

  const oWins = checkWin(board, "O", size, winLength);
  if (oWins) return "O";

  return null;
}

function checkWin(
  board: Board,
  symbol: Piece,
  size: number,
  winLength: number
): boolean {
  return (
    checkRows(board, symbol, size, winLength) ||
    checkColumns(board, symbol, size, winLength) ||
    checkDownDiagonals(board, symbol, size, winLength) ||
    checkUpDiagonals(board, symbol, size, winLength)
  );
}

function checkRows(
  board: Board,
  symbol: Piece,
  size: number,
  winLength: number
): boolean {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - winLength; j++) {
      let match = true;
      for (let k = 0; k < winLength; k++) {
        if (board[i][j + k] !== symbol) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
  }
  return false;
}

function checkColumns(
  board: Board,
  symbol: Piece,
  size: number,
  winLength: number
): boolean {
  for (let j = 0; j < size; j++) {
    for (let i = 0; i <= size - winLength; i++) {
      let match = true;
      for (let k = 0; k < winLength; k++) {
        if (board[i + k][j] !== symbol) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
  }
  return false;
}

function checkDownDiagonals(
  board: Board,
  symbol: Piece,
  size: number,
  winLength: number
): boolean {
  for (let i = 0; i <= size - winLength; i++) {
    for (let j = 0; j <= size - winLength; j++) {
      let match = true;
      for (let k = 0; k < winLength; k++) {
        if (board[i + k][j + k] !== symbol) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
  }
  return false;
}

function checkUpDiagonals(
  board: Board,
  symbol: Piece,
  size: number,
  winLength: number
): boolean {
  for (let i = 0; i <= size - winLength; i++) {
    for (let j = winLength - 1; j < size; j++) {
      let match = true;
      for (let k = 0; k < winLength; k++) {
        if (board[i + k][j - k] !== symbol) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
  }
  return false;
}

export function checkDraw(board: Board): boolean {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === null) return false;
    }
  }
  return true;
}
