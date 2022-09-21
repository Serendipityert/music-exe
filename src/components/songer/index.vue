<template>
    <div class="flex flex-col mt-1">
        <div class="flex flex-row">
            <div class="w-36 h-36 rounded-full">
                <img style="width: 100%; height: 100%;" class="rounded-full" :src="songer.img1v1Url" alt="user-img" />
            </div>
            <div class="flex flex-col ml-6 mt-2">
                <div class="text-2xl font-black font-sans">{{ songer.name }}</div>
                <!-- <div class="mt-6 text-xs">暂无</div> -->
                <div class="mt-6 text-xs flex flex-row">
                    <span class="mr-8">单曲数： {{ songList.length }}</span>
                    <span>专辑数： {{ songer.albumSize }}</span>
                </div>
            </div>
        </div>
        <div class="mt-1">
            <t-tabs :default-value="1">
                <t-tab-panel :value="1" label="热门">
                    <MusicList :songListDetail="songListDetail"/>
                </t-tab-panel>
                <t-tab-panel :value="2" label="歌曲 0">
                    <p style="margin: 20px">创建的歌单</p>
                </t-tab-panel>
                <t-tab-panel :value="3" label="专辑">
                    <p style="margin: 20px">上传的视频</p>
                </t-tab-panel>
            </t-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import MusicList from '@/components/music/index.vue'

const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const songList = ref(JSON.parse(router.query.songs as string))
const songer = ref(JSON.parse(router.query.songer as string))
const songerDetail = ref( JSON.parse( router.query.songerDetail as string ) )

const songListDetail = ref( {
    songList,
    songerDetail,
    songer
})

</script>

<style scoped>
</style>