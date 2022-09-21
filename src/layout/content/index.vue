<template>
  <div class="content overflow-y-auto w-full flex-grow flex-auto" :style="m_content_height">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const { ipcRenderer } = require("electron");

const m_content_height = ref('height: 76%;')

// 最大化大小
ipcRenderer.on('footer-maximize', (e: any, data: any) => {
  m_content_height.value = 'height: 79%;'
})

// 最大化还原初始大小
ipcRenderer.on('footer-restore', (e: any, data: any) => {
  m_content_height.value = 'height: 76%;'
})
</script>

<style scoped>
.content {
  position: fixed;
  top: 90px;
  left: 0;
  height: 76%;
  padding-left: 240px;
  text-align: left;
  /* background-color: #242424; */
}
</style>
