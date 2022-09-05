<template>
    <div class="flex flex-col">
        <div class="mt-2 flex flex-col">
            <div class="flex flex-wrap content-start mt-4 ml-2">
                <div v-for="i in 8" :key="i" class="w-28 h-10 cursor-pointer bg-gray-100 mb-4 mr-4 p-4">
                    {{ i }}
                </div>
            </div>
        </div>
        <div class="mt-2 flex flex-col">
            <div class="font-medium text-2xl mt-2 text-gray-600">精选歌单</div>
            <div class="flex flex-wrap content-start mt-4 ml-2">
                <div v-for="i in 60" :key="i" class="w-44 h-44 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-2 p-4">
                    {{ i }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>