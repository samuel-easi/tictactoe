<script setup lang="ts">
const emit = defineEmits<{
  restart: [];
}>();

function handleRestart() {
  emit('restart');
}
</script>

<template>
  <button
    @click="handleRestart"
    class="px-6 py-3 bg-easi-primary text-easi-bg font-bold rounded hover:bg-easi-primary/80 transition-colors"
  >
    Recommencer
  </button>
</template>