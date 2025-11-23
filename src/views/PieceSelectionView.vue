<script setup lang="ts">
import type { Piece } from '../types/game';

const emit = defineEmits<{
  select: [piece: Piece];
}>();

function selectPiece(piece: Piece) {
  emit('select', piece);
}
</script>

<template>
  <div class="min-h-screen bg-easi-bg flex items-center justify-center flex-col">
    <h1 class="text-5xl font-bold text-easi-text mb-12">
      Choisissez votre pion
    </h1>

    <div class="flex gap-8 justify-center">
      <button @click="selectPiece('X')"
        class="w-32 h-32 border-4 border-easi-primary bg-easi-bg text-easi-primary text-6xl font-bold flex items-center justify-center transition-all hover:bg-easi-primary hover:text-easi-bg">
        X
      </button>

      <button @click="selectPiece('O')"
        class="w-32 h-32 border-4 border-easi-secondary bg-easi-bg text-easi-secondary text-6xl font-bold flex items-center justify-center transition-all hover:bg-easi-secondary hover:text-easi-bg">
        O
      </button>
    </div>
  </div>
</template>