<script setup>
import { useStore } from '../store';
const store = useStore();
</script>

<template>
  About
  <div>
    Author: {{store.name}} 
  </div>
  <div>
    Email: {{store.email}}
  </div>
</template>