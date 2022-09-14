<template>
  <div class="m-footer w-screen">
    <AudioMusic />
  </div>
</template>

<script setup lang="ts">
import AudioMusic from '@/pages/music/index.vue'
</script>

<style scoped>
.m-footer {
  position: fixed;
  bottom: 15px;
  left: 210px;
  z-index: 2;
  height: 70px;
  color: #000;
  padding: 10px;
}
</style>