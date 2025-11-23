<script setup lang="ts">
import { ref } from 'vue';
import { useGameStore } from './stores/gameState';
import PieceSelectionView from './views/PieceSelectionView.vue';
import GameView from './views/GameView.vue';
import type { Piece } from './types/game';

const gameStore = useGameStore();
const gameStarted = ref(false);

function handlePieceSelection(piece: Piece) {
  gameStore.initializeGame(piece);
  gameStarted.value = true;
}

function handleBackToSelection() {
  gameStarted.value = false;
  gameStore.resetGame();
}
</script>

<template>
  <PieceSelectionView v-if="!gameStarted" @select="handlePieceSelection" />
  <GameView v-else @back-to-selection="handleBackToSelection" />
</template>