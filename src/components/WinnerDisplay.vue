<script setup lang="ts">
import type { Piece } from '../types/game';

interface Props {
  winnerPiece: Piece;
  isDraw: boolean;
}

defineProps<Props>();
</script>

<template>
  <div v-if="winnerPiece || isDraw" class="text-center mb-8">
    <div v-if="isDraw" class="text-4xl font-bold text-easi-text">
      Match nul !
    </div>
    <div v-else-if="winnerPiece" class="text-4xl font-bold">
      <span v-if="winnerPiece === 'X'" class="text-easi-primary">X</span>
      <span v-else class="text-easi-secondary">O</span>
      <span class="text-easi-text"> a gagné !</span>
    </div>
  </div>
</template>