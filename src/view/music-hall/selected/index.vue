<template>
    <div class="flex flex-col">
        <div>
            <t-swiper theme="dark" :navigation="{ placement: 'outside', type: 'bars' }">
                <t-swiper-item v-for="i in 8" :key="i">
                    <div class="flex flex-row">
                        <div class="w-96 cursor-pointer rounded-xl p-4 h-32 bg-gray-400 mr-10">1</div>
                        <div class="w-96 cursor-pointer rounded-xl p-4 h-32 bg-gray-400 mr-10">2</div>
                        <div class="w-96 cursor-pointer rounded-xl p-4 h-32 bg-gray-400">3</div>
                    </div>
                </t-swiper-item>
            </t-swiper>
        </div>
        <div class="mt-10 flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">官方歌单
                <span class="text-xs ml-2">官方甄选订阅歌单</span>
            </div>
            <div class="flex flex-row mt-4 ml-4">
                <div v-for="i in 6" :key="i" class="w-48 h-52 cursor-pointer rounded-xl mr-4 p-4 bg-gray-300">{{ i }}
                </div>
            </div>
        </div>
        <div class="mt-10 flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">推荐有声变电台
            </div>
            <div class="flex flex-row mt-4 ml-4">
                <div v-for="i in 6" :key="i" class="w-48 h-52 cursor-pointer rounded-xl mr-4 p-4 bg-gray-300">{{ i }}
                </div>
            </div>
        </div>
        <div class="mt-10 flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">推荐视频
            </div>
            <div class="flex flex-row mt-4 ml-4">
                <div v-for="i in 6" :key="i" class="w-48 h-52 cursor-pointer rounded-xl mr-4 p-4 bg-gray-300">{{ i }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>