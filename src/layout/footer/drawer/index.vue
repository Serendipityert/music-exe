<template>
    <div class="flex flex-col mt-8  text-left" :style="dragY">
        <div class="flex flex-row justify-around">
            <div class="div mt-24 bg-cover">
                <image src="https://imgessl.kugou.com/stdmusic/20200831/20200831145501173343.jpg" />
            </div>
            <div class="song mt-8">2</div>
        </div>
        <div class="flex h-16 footer">
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref } from "vue";
import AudioMusic from '@/pages/music/index.vue'

const dragY = ref('-webkit-app-region: drag;-webkit-user-select: none;');
const dragN = ref('-webkit-app-region: no-drag;');
</script>

<style scoped>
.div{
    width: 400px;
    height: 400px;
}
.song {
    width: 500px;
    height: 500px;
    color: #fff;
    border: 1px solid #fff;
}
.footer{
    color: #fff;
    width: 98%;
    border: 1px solid #fff;
    position: fixed;
    bottom: 10px;
    z-index: 2;
}
</style>