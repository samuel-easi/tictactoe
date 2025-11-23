<script setup lang="ts">
import { useGameStore } from '../stores/gameState';
import { isValidMove } from '../utils/boardOperations';
import { checkWinner, checkDraw } from '../utils/winDetection';
import { getComputerMove } from '../utils/computerMove';
import GameGrid from '../components/GameGrid.vue';
import WinnerDisplay from '../components/WinnerDisplay.vue';
import RestartButton from '../components/RestartButton.vue';
import { DEFAULT_WIN_LENGTH } from '../config/gameConfig';

const emit = defineEmits<{
  backToSelection: []
}>();

const gameStore = useGameStore();

function checkGameEnd(): boolean {
  const winner = checkWinner(gameStore.board, DEFAULT_WIN_LENGTH);
  if (winner) {
    gameStore.setWinner(winner);
    return true;
  }

  if (checkDraw(gameStore.board)) {
    gameStore.setDraw();
    return true;
  }

  return false;
}

function handleCellClick(row: number, col: number) {
  if (gameStore.isGameOver) return;
  if (gameStore.currentPiece !== gameStore.humanPiece) return;
  if (!isValidMove(gameStore.board, row, col)) return;

  gameStore.placePiece(row, col, gameStore.humanPiece);

  if (checkGameEnd()) return;

  gameStore.switchPlayer();
  setTimeout(playComputerTurn, 200);
}

function playComputerTurn() {
  if (gameStore.isGameOver) return;

  const move = getComputerMove(gameStore.board);
  if (!move) return;

  gameStore.placePiece(move.row, move.col, gameStore.computerPiece);

  if (checkGameEnd()) return;

  gameStore.switchPlayer();
}

function handleRestart() {
  gameStore.resetGame();
}
</script>

<template>
  <div class="min-h-screen bg-easi-bg flex flex-col items-center justify-center p-8">
    <button @click="emit('backToSelection')"
      class="absolute top-4 left-4 px-4 py-2 bg-easi-secondary text-easi-text rounded-lg hover:opacity-80 transition-opacity">
      ← Changer de pion
    </button>

    <WinnerDisplay :winnerPiece="gameStore.winnerPiece" :isDraw="gameStore.isDraw" />

    <GameGrid :board="gameStore.board"
      :disabled="gameStore.isGameOver || gameStore.currentPiece !== gameStore.humanPiece"
      @cellClick="handleCellClick" />

    <div v-if="gameStore.isGameOver" class="mt-8">
      <RestartButton @restart="handleRestart" />
    </div>
  </div>
</template>