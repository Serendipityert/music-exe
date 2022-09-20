<template>
    <div class="z-50 flex flex-col p-4 rounded">
        <div class="text-gray-500 p-2 text-sm">热搜榜</div>
        <div v-for="(item,index) in hotSearchResult" :key="index">
            <div class="hover:bg-gray-100 flex flex-row cursor-pointer" @click="hotMusicPlay(item)">
                <div class="w-14 h-14 text-center pt-5 italic font-semibold text-xs" :style="index <= 2 ? 'color: red;' : 'color: black;'">{{index + 1}}</div>
                <div class="h-14 flex flex-col text-gray-800">
                    <div class="text-xs pt-3">
                        <span :style="index <= 2 ? 'font-weight: 600;' : 'font-weight: 400;'">{{ item.searchWord }}</span>
                        <span class="ml-1 text-red-600 font-semibold" style="font-style: italic;font-size:9.5px;" v-if="index === 0">HOT</span>
                        <span class="ml-2 text-gray-300">{{item.score}}</span>
                    </div>
                    <div class="text-xs text-gray-400">{{item.content}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next';

const props = defineProps({
  hotSearchResult: {
    type: Array,
    default: () => [],
    required: true
    },
} )

const hotMusicPlay = ( data: any ) => {
    MessagePlugin.success( data.searchWord )
}
</script>

<style scoped>
</style>