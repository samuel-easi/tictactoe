<script setup lang="ts">
import type { Piece } from '../types/game';

interface Props {
  piece: Piece;
  row: number;
  col: number;
  disabled: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  click: [row: number, col: number];
}>();

function handleClick() {
  if (props.disabled || props.piece !== null) return;
  emit('click', props.row, props.col);
}
</script>

<template>
  <button @click="handleClick" :disabled="disabled || piece !== null"
    class="w-24 h-24 border-2 border-easi-primary bg-easi-bg text-easi-text text-5xl font-bold flex items-center justify-center">
    <span v-if="piece === 'X'" class="text-easi-primary">{{ piece }}</span>
    <span v-else-if="piece === 'O'" class="text-easi-secondary">{{ piece }}</span>
  </button>
</template>