<template>
    <div class="flex flex-col">
        <div class="font-bold text-3xl">音乐馆</div>
        <div class="flex mt-4">
            <t-tabs :value="value1" size="medium" @change="(newValue: string) => (value1 = newValue)">
                <t-tab-panel value="1" label="精选">
                    <div class="p-3">
                        <Selected />
                    </div>
                </t-tab-panel>
                <t-tab-panel value="2" label="电台">
                    <div class="p-6">
                        <AudioStation />
                    </div>
                </t-tab-panel>
                <t-tab-panel value="3" label="排行">
                    <div class="p-3">
                        <Ranking />
                    </div>
                </t-tab-panel>
                <t-tab-panel value="4" label="歌手">
                    <div class="p-6">
                        <Singer />
                    </div>
                </t-tab-panel>
                <t-tab-panel value="5" label="分类歌单">
                    <div class="p-6">
                        <ClassifiedSongList />
                    </div>
                </t-tab-panel>
                <t-tab-panel value="6" label="数字专辑">
                    <div class="p-6">
                        <DigitalAlbum />
                    </div>
                </t-tab-panel>
                <t-tab-panel value="7" label="手机专享">
                    <div class="p-6">
                        <MobileExclusive />
                    </div>
                </t-tab-panel>
            </t-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Singer from './singer/index.vue'
import AudioStation from './audio-station/index.vue'
import ClassifiedSongList from './classified-song-list/index.vue'
import DigitalAlbum from './digital-album/index.vue'
import MobileExclusive from './mobile-exclusive/index.vue'
import Ranking from './ranking/index.vue'
import Selected from './selected/index.vue'

const value1 = ref('1');

</script>

<style scoped>

</style>