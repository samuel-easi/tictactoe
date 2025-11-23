<script setup lang="ts">
import type { Piece } from '../types/game';
import GridCell from './GridCell.vue';

interface Props {
  board: Piece[][];
  disabled: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  cellClick: [row: number, col: number];
}>();

function handleCellClick(row: number, col: number) {
  emit('cellClick', row, col);
}
</script>

<template>
  <div class="grid gap-0" :style="{ gridTemplateColumns: `repeat(${board.length}, minmax(0, 1fr))` }">
    <template v-for="(row, rowIndex) in board" :key="rowIndex">
      <GridCell v-for="(cell, colIndex) in row" :key="`${rowIndex}-${colIndex}`" :piece="cell" :row="rowIndex"
        :col="colIndex" :disabled="disabled" @click="handleCellClick" />
    </template>
  </div>
</template>