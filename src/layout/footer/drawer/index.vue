<template>
    <div class="flex flex-col mt-8 text-left" :style="dragY">
        <div class="div h-screen bg-cover"></div>
    </div>
</template>

<script setup lang="ts">
import {ref } from "vue";

const dragY = ref('-webkit-app-region: drag;-webkit-user-select: none;');
const dragN = ref('-webkit-app-region: no-drag;');
</script>

<style scoped>
.div{
    background:url("https://imgessl.kugou.com/stdmusic/20200831/20200831145501173343.jpg");
    width: 30%;
    height: 50%;
    position: fixed;
    top: 20%;
    left: 10%;
    background-size: 100% 100%;
}
</style>