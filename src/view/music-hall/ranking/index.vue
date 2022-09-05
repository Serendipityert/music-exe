<template>
    <div class="flex flex-col">
        <div class="mt-2 flex flex-col">
            <div class="flex flex-wrap content-start mt-4 ml-2">
                <div v-for="i in 8" :key="i" class="w-96 h-44 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-2 p-4">
                    {{ i }}
                </div>
            </div>
        </div>
        <div class="mt-2 flex flex-col">
            <div class="font-medium text-2xl mt-2 text-gray-600">地区榜</div>
            <div class=" flex flex-wrap content-start mt-4 ml-2">
                <div v-for="i in 6" :key="i" class="w-36 h-36 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-2 p-4">
                    {{ i }}
                </div>
            </div>
        </div>
        <div class="mt-2 flex flex-col">
            <div class="font-medium text-2xl mt-2 text-gray-600">特色榜</div>
            <div class=" flex flex-wrap content-start mt-4 ml-2">
                <div v-for="i in 11" :key="i" class="w-36 h-36 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-2 p-4">
                    {{ i }}
                </div>
            </div>
        </div>
        <div class="mt-2 flex flex-col">
            <div class="font-medium text-2xl mt-2 text-gray-600">全球榜</div>
            <div class=" flex flex-wrap content-start mt-4 ml-2">
                <div v-for="i in 9" :key="i" class="w-36 h-36 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-2 p-4">
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