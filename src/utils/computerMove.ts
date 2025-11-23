import type { Board, CellPosition } from "../types/game";
import { getEmptyCells } from "./boardOperations";

export function getComputerMove(board: Board): CellPosition | null {
  const emptyCells = getEmptyCells(board);

  if (emptyCells.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
}
