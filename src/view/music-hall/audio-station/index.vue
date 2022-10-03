<template>
    <div class="flex flex-col">
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-4 text-gray-600">本周上新
            </div>
            <div class="flex flex-row mt-4 ml-4">
                <div v-for="i in 6" :key="i" class="w-48 h-52 cursor-pointer rounded-xl mr-4 p-4 bg-gray-300">{{ i }}
                </div>
            </div>
            <div class="flex flex-row mt-2 ml-4">
                <div v-for="i in 6" :key="i" class="w-48 h-52 cursor-pointer rounded-xl mr-4 p-4 bg-gray-300">{{ i }}
                </div>
            </div>
        </div>
        <div class="mt-10 flex flex-col ml-10">
            <div class="flex flex-row mt-4 ml-4">
                <div v-for="i in 10" :key="i" class="w-24 h-24 cursor-pointer rounded-sm mr-4 p-4 bg-gray-300">{{ i }}
                </div>
            </div>
            <div class="flex flex-row mt-4 ml-4">
                <div v-for="i in 10" :key="i" class="w-24 h-24 cursor-pointer rounded-sm mr-4 p-4 bg-gray-300">{{ i }}
                </div>
            </div>
        </div>
        <div class="mt-10 flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">推荐节目</div>
            <div class="flex flex-wrap content-start mt-6 ml-2">
                <div v-for="i in 12" :key="i" class="w-96 h-20 cursor-pointer rounded-xl bg-gray-100 mb-4 mr-2 p-4">
                    {{i}}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>