<template>
    <div class="flex flex-col">
        <div class="font-bold text-3xl">推荐</div>
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">Hi {{ name }} 今日为你推荐</div>
            <div class="flex flex-around mt-6">
                <div class="w-96 h-40 cursor-pointer rounded-xl bg-gray-100 mr-4 p-4">个性电台</div>
                <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 mr-4 p-4">每日30首</div>
                <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 mr-4 p-4">新歌推荐</div>
                <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 p-4">百万收藏</div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">你的私荐歌单</div>
            <div class="flex flex-col mt-6">
                <div class="flex flex-around">
                    <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 mr-4 p-4">个性电台</div>
                    <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 mr-4 p-4">每日30首</div>
                    <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 mr-4 p-4">新歌推荐</div>
                    <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 p-4">百万收藏</div>
                </div>
                <div class=" mt-4 flex flex-around">
                    <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 mr-4 p-4">个性电台</div>
                    <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 mr-4 p-4">每日30首</div>
                    <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 mr-4 p-4">新歌推荐</div>
                    <div class="w-60 h-40 cursor-pointer rounded-xl bg-gray-100 p-4">百万收藏</div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">大家都在听</div>
            <div class="flex flex-wrap content-start mt-6 ml-4">
                <div class="w-96 h-20 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-4 p-4">个性电台</div>
                <div class="w-96 h-20 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-4 p-4">每日30首</div>
                <div class="w-96 h-20 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-4 p-4">新歌推荐</div>
                <div class="w-96 h-20 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-4 p-4">百万收藏</div>
                <div class="w-96 h-20 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-4 p-4">新歌推荐</div>
                <div class="w-96 h-20 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-4 p-4">百万收藏</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('醉卧花栖雪')

</script>

<style scoped>
</style>