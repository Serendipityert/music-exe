<template>
    <div class="flex flex-col">
        <div class="font-bold text-3xl">我喜欢</div>
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">
                <t-tabs :default-value="1">
                    <t-tab-panel :value="1" label="歌曲 60">
                        <Song />
                    </t-tab-panel>
                    <t-tab-panel :value="2" label="歌单 0">
                        <Empty :category="'歌单'" />
                    </t-tab-panel>
                    <t-tab-panel :value="3" label="专辑 0">
                        <Empty :category="'专辑'" />
                    </t-tab-panel>
                    <t-tab-panel :value="4" label="主播电台 0">
                        <Empty :category="'主播电台'" />
                    </t-tab-panel>
                    <t-tab-panel :value="5" label="视频 0">
                        <Empty :category="'视频'" />
                    </t-tab-panel>
                </t-tabs>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Song from './song/index.vue'
import Empty from './empty/index.vue'


</script>

<style scoped>
</style>