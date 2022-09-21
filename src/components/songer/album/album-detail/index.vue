<template>
    <!-- <div class="flex flex-col mt-1">
        <div class="flex flex-row">
            <div class="w-36 h-36 rounded-full">
                <img style="width: 100%; height: 100%;" class="rounded-full" :src="songer.img1v1Url" alt="user-img" />
            </div>
            <div class="flex flex-col ml-6 mt-2">
                <div class="text-2xl font-black font-sans">{{ songer.name }}</div>
                <div class="mt-6 text-xs flex flex-row">
                    <span class="mr-8">单曲数： {{ songList.length }}</span>
                    <span>专辑数： {{ songer.albumSize }}</span>
                </div>
            </div>
        </div>
        <div class="mt-1">
            <t-tabs :default-value="1">
                <t-tab-panel :value="1" :label="'热门歌曲 ' + songList.length">
                    <MusicList :songListDetail="songListDetail"/>
                </t-tab-panel>
                <t-tab-panel :value="2" label="歌手详情">
                    <div class="m-6 flex flex-col">
                        <div class="flex flex-col">
                            <div class="text-gray-600 text-base font-bold">{{songerDetail.artist.name}}简介</div>
                            <div class="ml-4 p-2">{{songerParticulars.briefDesc}}</div>
                        </div>
                        <div class="flex flex-col" v-if="songerParticulars.introduction.length > 0" v-for="(item, index) in songerParticulars.introduction" :key="index">
                            <div class="text-gray-600 text-base font-bold">{{item.ti}}</div>
                            <div class="ml-4 p-2">{{item.txt}}</div>
                        </div>
                    </div>
                </t-tab-panel>
                <t-tab-panel :value="3" label="专辑" >
                    <SongerAlbum :songerAlbumList="songerAlbumList" />
                </t-tab-panel>
            </t-tabs>
        </div>
    </div> -->
    <div>{{albumContent}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import { getSongerBriefDesc } from "@/api/music/index"
import { getSongerAlbum } from "@/api/music/index"
import MusicList from '@/components/music/index.vue'
import { MessagePlugin } from 'tdesign-vue-next';
import SongerAlbum from '@/components/songer/album/index.vue'

const router = useRoute()

// // 接收路由参数值, as string 类型断言处理
// const songList = ref(JSON.parse(router.query.songs as string))
// const songer = ref(JSON.parse(router.query.songer as string))
// const songerDetail = ref( JSON.parse( router.query.songerDetail as string ) )
const albumContent = ref( JSON.parse( router.query.albumContent as string ) )

console.log(albumContent.value)

// const songListDetail = ref( {
//     songList,
//     songerDetail,
//     songer
// } )
// // 歌手详情
// const songerParticulars = ref()
// // 歌手专辑
// const songerAlbumList = ref()

// // 获取歌手详情
// getSongerBriefDesc(songer.value.id).then( ( res: any ) => {
//     if ( res.code === 200 ) {
//         songerParticulars.value = res
//     }
// } ).catch( ( err: any ) => {
//     MessagePlugin.warning(err)
// } )

// // 获取歌手专辑信息
// getSongerAlbum( songer.value.id ).then( ( res: any ) => {
//     if ( res.code === 200 ) {
//         songerAlbumList.value = res
//     }
// } ).catch( ( err: any ) => {
//     MessagePlugin.warning(err)
// })

</script>

<style scoped>
</style>