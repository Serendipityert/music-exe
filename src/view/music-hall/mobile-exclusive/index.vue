<template>
    <div class="flex flex-col">
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-4 text-gray-600">手机特色功能</div>
            <div class="flex flex-row mt-4 ml-4">
                <div v-for="i in 6" :key="i" class="w-48 h-52 cursor-pointer rounded-xl mr-4 p-4 bg-gray-300">{{ i }}
                </div>
            </div>
        </div>
        <div class="mt-10 flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">精彩音乐动态</div>
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