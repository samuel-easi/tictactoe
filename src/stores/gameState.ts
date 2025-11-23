import { defineStore } from "pinia";
import type { Piece } from "../types/game";
import { createEmptyBoard } from "../utils/boardOperations";
import { DEFAULT_GRID_SIZE } from "../config/gameConfig";

export const useGameStore = defineStore("game", {
  state: () => ({
    board: createEmptyBoard(DEFAULT_GRID_SIZE) as Piece[][],
    currentPiece: null as Piece,
    humanPiece: null as Piece,
    computerPiece: null as Piece,
    winnerPiece: null as Piece,
    isDraw: false,
    isGameOver: false,
  }),

  actions: {
    initializeGame(humanPiece: Piece) {
      this.humanPiece = humanPiece;
      this.computerPiece = humanPiece === "X" ? "O" : "X";
      this.board = createEmptyBoard(DEFAULT_GRID_SIZE);
      this.currentPiece = humanPiece;
      this.winnerPiece = null;
      this.isDraw = false;
      this.isGameOver = false;
    },

    resetGame() {
      this.board = createEmptyBoard(DEFAULT_GRID_SIZE);
      this.currentPiece = this.humanPiece;
      this.winnerPiece = null;
      this.isDraw = false;
      this.isGameOver = false;
    },

    placePiece(row: number, col: number, piece: Piece) {
      this.board[row][col] = piece;
    },

    setWinner(piece: Piece) {
      this.winnerPiece = piece;
      this.isGameOver = true;
    },

    setDraw() {
      this.isDraw = true;
      this.isGameOver = true;
    },

    switchPlayer() {
      this.currentPiece = this.currentPiece === "X" ? "O" : "X";
    },
  },
});
