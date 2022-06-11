<script setup>
import { useStore } from '../store';
const store = useStore();
</script>

<template>
  <div> Home </div>
  <div>
    Counter: {{ store.counter }}
    <button @click="store.increment()"> Add </button>
    <button @click="store.$reset"> Reset </button>
  </div>
</template>