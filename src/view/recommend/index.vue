<template>
    <div class="flex flex-col">
        <div class="font-bold text-3xl">推荐</div>
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">Hi {{ userInfo.profile.nickname }} 今日为你推荐</div>
            <div class="flex flex-around mt-2">
                <div class="w-96 h-40 cursor-pointer rounded-xl mr-4 p-2" @click="openRecommendDj">
                    <img v-if="recommendDj" :src="recommendDj[recommendDj.index].picUrl" class="rounded-xl"
                        style="width: 100%; height: 100%;" />
                    <span class="text-sm mt-2">个性电台</span>
                </div>
                <div class="w-60 h-40 cursor-pointer rounded-xl mr-4 p-2" @click="openRecommendedSongsList">
                    <img v-if="recommendedSongsList"
                        :src="recommendedSongsList.dailySongs[recommendedSongsList.index].al.picUrl" class="rounded-xl"
                        style="width: 100%; height: 100%;" />
                    <span class="text-sm mt-2">每日30首</span>
                </div>
                <div class="w-60 h-40 cursor-pointer rounded-xl mr-4 p-2">
                    <img v-if="recommendNewSongs" :src="recommendNewSongs[recommendNewSongs.index].picUrl"
                        class="rounded-xl" style="width: 100%; height: 100%;" />
                    <span class="text-sm mt-2">新歌推荐</span>
                </div>
                <div class="w-60 h-40 cursor-pointer rounded-xl p-2">
                    <img v-if="recommendMv" :src="recommendMv[recommendMv.index].picUrl" class="rounded-xl"
                        style="width: 100%; height: 100%;" />
                    <span class="text-sm mt-2">推荐 MV</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-8 text-gray-600">你的私荐歌单</div>
            <div class="flex flex-col mt-2">
                <div class="flex flex-around">
                    <div class="w-60 h-40 cursor-pointer rounded-xl mr-2 p-1" v-if="recommendedPlayList"
                        v-for="(item,index) in recommendedPlayList" :key="index" @click="openRecommendedPlayList(item)">
                        <img :src="item.picUrl" alt="" style="width: 100%; height: 90%;" />
                        <div class="text-xs w-50 mt-2">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="font-medium text-xl mt-14 text-gray-600">热门歌手</div>
            <div class="flex flex-wrap content-start mt-6 ml-2">
                <div class="w-48 h-32 cursor-pointer rounded-xl mb-12 mr-2 p-2" v-if="hotSongerList"
                    v-for="(item,index) in hotSongerList" :key="index">
                    <img :src="item.picUrl" alt="">
                    <div>{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { userStore } from '@/store/modules/user'
import { storeToRefs } from "pinia"
import { getDayRecommendSongs } from '@/api/music/index'
import { getDayRecommendPlayList } from '@/api/music/index'
import { getDayRecommendDj } from '@/api/music/index'
import { getDayRecommendNewSongs } from '@/api/music/index'
import { getDayRecommendMv } from '@/api/music/index'
import { getHotSongerList } from '@/api/music/index'
import { getRandomNumber } from '@/util/random'

const userState = userStore()
const { userInfo, cookie } = storeToRefs<any>( userState )
const recommendedSongsList = ref<any>()
const recommendedPlayList = ref<any>()
const recommendDj = ref<any>()
const recommendNewSongs = ref<any>()
const recommendMv = ref<any>()
const hotSongerList = ref<any>()

getDayRecommendSongs( cookie.value ).then( ( res: any ) => {
    if ( res.code === 200 ) {
        recommendedSongsList.value = res.data
        recommendedSongsList.value.index = getRandomNumber( res.data.dailySongs.length )
    }
} )

getDayRecommendPlayList( cookie.value ).then( ( res: any ) => {
    if ( res.code === 200 ) {
        recommendedPlayList.value = res.recommend
    }
} )

getDayRecommendDj( cookie.value ).then( ( res: any ) => {
    if ( res.code === 200 ) {
        recommendDj.value = res.djRadios
        recommendDj.value.index = getRandomNumber( res.djRadios.length )
    }
} )

getDayRecommendNewSongs().then( ( res: any ) => {
    if ( res.code === 200 ) {
        recommendNewSongs.value = res.result
        recommendNewSongs.value.index = getRandomNumber( res.result.length )
    }
} )

getDayRecommendMv().then( ( res: any ) => {

    if ( res.code === 200 ) {
        recommendMv.value = res.result
        recommendMv.value.index = getRandomNumber( res.result.length )
    }
} )

getHotSongerList().then( ( res: any ) => {
    if ( res.code === 200 ) {
        hotSongerList.value = res.artists
    }
} )


const openRecommendedSongsList = () => {
    console.log( recommendedSongsList.value )
}

const openRecommendedPlayList = ( e: any ) => {
    console.log( e )
}

const openRecommendDj = () => {
    console.log( recommendDj.value )
}
</script>

<style scoped>

</style>