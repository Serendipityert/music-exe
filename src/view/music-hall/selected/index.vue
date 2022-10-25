<template>
    <div class="flex flex-col">
        <div class="m-auto">
            <t-swiper theme="dark" :navigation="{ placement: 'outside', type: 'bars' }">
                <t-swiper-item v-if="bannerList" v-for="(item, index) in bannerList" :key="index"
                    @click="openBanner(item)">
                    <div class="cursor-pointer p-1 h-80">
                        <img :src="item.imageUrl" alt="">
                    </div>
                </t-swiper-item>
            </t-swiper>
        </div>
        <div class="mt-8 flex flex-col">
            <div class="font-medium text-xl mt-3 text-gray-600">精选歌单
                <span class="text-xs ml-2">官方甄选歌单</span>
            </div>
            <div class="flex flex-row mt-4 ml-4 flex-wrap content-start">
                <div class="w-36 h-36 cursor-pointer rounded-xl mr-4 mb-14 p-1 img" v-if="boutiquePlayList"
                    v-for="(item, index) in boutiquePlayList" :key="index">
                    <img :src="item.coverImgUrl" alt="" class="mb-2 rounded-md">
                    <span class="text-xs">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="mt-3 flex flex-col">
            <div class="font-medium text-xl mt-6 text-gray-600">推荐电台
            </div>
            <div class="flex flex-row mt-4 ml-4">
                <div class="w-48 h-52 cursor-pointer rounded-xl mr-4 p-1 img" v-if="personalizedDjProgram"
                    v-for="(item, index) in personalizedDjProgram" :key="index"
                    @click="openPersonalizedDjProgram(item)">
                    <img :src="item.picUrl" alt="" class="mb-2">
                    <span class="text-xs">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="mt-6 flex flex-col">
            <div class="font-medium text-xl mt-2 text-gray-600">推荐视频
            </div>
            <div class="flex flex-row mt-2 ml-2">
                <div class="w-60 h-48 cursor-pointer rounded-xl mr-2 p-1 img" v-if="recommendVideo"
                    v-for="(item, index) in recommendVideo" :key="index" @click="openRecommendVideo(item)">
                    <img :src="item.data.coverUrl" alt="" class="mb-2">
                    <span class="text-xs">{{ item.data.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/store/modules/user'
import { storeToRefs } from "pinia"

import { getBoutiquePlayList } from "@/api/music/index"
import { getBanner } from "@/api/music/index"
import { getPersonalizedDjProgram } from "@/api/music/index"
import { getRecommendVideo } from "@/api/music/index"

const userState = userStore()
const { cookie } = storeToRefs<any>(userState)

const boutiquePlayList = ref<any>()
const bannerList = ref<any>()
const personalizedDjProgram = ref<any>()
const recommendVideo = ref<any>()

getBoutiquePlayList(24).then((res: any) => {
    if (res.code === 200) {
        boutiquePlayList.value = res.playlists
    }
})

getBanner().then((res: any) => {
    if (res.code === 200) {
        bannerList.value = res.banners
    }
})

getPersonalizedDjProgram().then((res: any) => {
    if (res.code === 200) {
        personalizedDjProgram.value = res.result
    }
})

getRecommendVideo(10, cookie.value).then((res: any) => {
    if (res.code === 200) {
        recommendVideo.value = res.datas
    }
})

const openBanner = (item: any) => {
    console.log(item)
}

const openPersonalizedDjProgram = (item: any) => {
    console.log(item)
}

const openRecommendVideo = (item: any) => {
    console.log(item)
}
</script>

<style scoped>
.img:hover {
    transform: translateY(-8px);
}
</style>