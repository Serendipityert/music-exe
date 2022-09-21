<template>
    <div class="z-50 flex flex-col p-4 rounded" v-if="searchResult != null">
        <div class="flex flex-col">
            <span>在线音乐</span>
          <t-divider />
        </div>
        <div class="flex flex-col mt-1">
            <div class="flex flex-row">
                <div class="flex h-full ml-6 p-2">单曲</div>
                <div class="flex h-full flex-col ml-2">
                    <div v-for="(item,index) in searchResult.songs" :key="index">
                        <div class="w-64 p-2 hover:bg-gray-100 text-sm cursor-pointer" @click="singleSearch(item)">
                            <span class="text-red-400">{{ item.name }}</span> - {{item.artists[0].name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div class="flex h-full ml-6 p-2">歌手</div>
                <div class="flex h-full flex-row ml-2 ">
                    <div v-for="(item,index) in searchResult.artists" :key="index">
                        <div class="hover:bg-gray-100 p-2 w-64 flex flex-row cursor-pointer" @click="singerSearch(item)">
                            <div class="w-10 h-10 ">
                                <img :src="item.picUrl" class="rounded-full" style="width: 100%; height: 100%;"/>
                            </div>
                            <div class="p-2">
                                <span class="text-red-400">{{ item.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div class="flex h-full ml-6 p-2">专辑</div>
                <div class="flex h-full flex-col ml-2">
                    <div v-for="(item,index) in searchResult.albums" :key="index">
                        <div class="hover:bg-gray-100 p-2 w-64 flex flex-row cursor-pointer" @click="albumSearch(item)">
                            <div class="w-10 h-10 ">
                                <img :src="item.artist.picUrl" class="rounded-lg" style="width: 100%; height: 100%;"/>
                            </div>
                            <div class="p-2">
                                <span class="text-red-400">{{ item.name }}</span> - {{item.artist.name}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { getMusicUrl } from '@/api/music/index'
import { getSongerDetail } from '@/api/music/index'
import { getHotMusicBySongId } from '@/api/music/index'
import { MessagePlugin } from 'tdesign-vue-next';
import router from '@/router/index'

const props = defineProps({
  searchResult: {
    type: Array,
    default: () => [],
    required: true
    },
} )
const songerDetail = ref()
// 单曲搜索
const singleSearch = ( data: any ) => {
    getMusicUrl( data.id ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            // 跳转至结果页面
        }
    }).catch((err: any) => {
        MessagePlugin.warning(err)
  })
}

// 歌手搜索
const singerSearch = ( data: any ) => {
    // 根据歌手id获取歌手详情
    getSongerDetail( data.id ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            songerDetail.value = res.data
        }
    }).catch((err: any) => {
        MessagePlugin.warning(err)
    } )
    // 根据歌手id获取歌手热门歌曲
    getHotMusicBySongId(data.id).then( ( res: any ) => {
        // 跳转至搜索结果页面
        router.push( {
            path: '/songer-detail',
            query: {
                songs: JSON.stringify( res.songs ),
                songer: JSON.stringify( data ),
                songerDetail: JSON.stringify( songerDetail.value ),
                date: Date.now(),
            }
        } )
    }).catch((err: any) => {
        MessagePlugin.warning(err)
  })
}

// 专辑搜索
const albumSearch = (data: any) => {
    console.log(data)
}

</script>

<style scoped>
</style>