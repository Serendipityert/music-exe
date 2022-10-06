<template>
    <div class="flex mt-4 select-none">
        <div class="flex flex-wrap content-start ml-2">
            <div class="w-48 h-54 shadow-md cursor-pointer rounded-xl mb-6 mr-3 p-4 flex flex-col"
                v-for="(item,index) in playList" :key="index" @mouseover="mouseoverAlbum(index)"
                @mouseout="mouseoutAlbum" @click="openPlayList(item)">
                <div class="w-36 h-36 rounded-lg ml-2 ">
                    <img :src="item.coverImgUrl" class="rounded-lg album-div" style="width: 100%; height: 100%;" />
                </div>
                <div class="flex flex-col mt-2 ml-4">
                    <div class="text-xs text-black">{{item.name}}</div>
                    <div class="text-xs mt-1 text-gray-400">{{formatDate(new Date(item.createTime))}}</div>
                    <div class="text-xs mt-1 text-gray-400">{{item.trackCount}}首</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue"
import { formatDate } from "@/util/date"
import router from "@/router/index"
import { getPlayListDetail } from '@/api/user/index'
import { MessagePlugin } from 'tdesign-vue-next'

const mouseoverAlbumShow = ref()

const props = defineProps( {
    playList: {
        type: Array,
        default: () => { },
        required: true
    } as any
} )

// 点击进入某个歌单
const openPlayList = ( item: any ) => {
    getPlayListDetail( item.id ).then( ( res: any ) => {
        router.push( {
            path: '/play-list-detail',
            query: {
                playListDetail: JSON.stringify( res ),
                date: Date.now()
            }
        } )
    } )
}

const mouseoverAlbum = ( i: number ) => {
    mouseoverAlbumShow.value = i
}
const mouseoutAlbum = () => {
    mouseoverAlbumShow.value = false
}

</script>

<style scoped>
.album-div:hover {
    transform: translateY(-8px);
}

.shadow-div {
    position: absolute;
    margin: 50px 50px;
    z-index: 2;
}
</style>