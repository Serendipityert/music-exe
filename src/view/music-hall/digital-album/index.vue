<template>
    <div class="flex flex-col">
        <div class="m-auto">
            <t-swiper theme="dark" :navigation="{ placement: 'outside', type: 'bars' }">
                <template v-if="bannerList" v-for="(item, index) in bannerList" :key="index">
                    <t-swiper-item v-if="index >= bannerList.length / 2" @click="openBanner(item)">
                        <div class="cursor-pointer p-1 h-80">
                            <img :src="item.imageUrl" alt="">
                        </div>
                    </t-swiper-item>
                </template>
            </t-swiper>
        </div>
        <div class="mt-8 flex flex-col">
            <div class="font-medium text-xl mt-3 text-gray-600">最新专辑</div>
            <div class="flex flex-row mt-4 ml-2 flex-wrap content-start">
                <div class="w-36 h-36 cursor-pointer rounded-xl text-center mr-2 mb-14 p-1 img" v-if="newAlbumList"
                    v-for="(item, index) in newAlbumList" :key="index">
                    <img :src="item.picUrl" alt="" class="mb-2 rounded-md">
                    <span class="text-xs">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="mt-3 flex flex-col">
            <div class="font-medium text-xl text-gray-600">新碟上架
            </div>
            <div class="flex flex-row flex-wrap mt-4">
                <div class="w-36 h-36 flex flex-col cursor-pointer rounded-xl mr-3 mb-28" v-if="albumProductsList"
                    v-for="(item, index) in albumProductsList" :key="index">
                    <div class="flex flex-col">
                        <img :src="item.coverUrl" alt="" class="mb-2 rounded-md img">
                        <span class="text-xs hover:text-blue-800 ml-2">{{ item.albumName }}</span>
                        <span class="text-xs hover:text-blue-800 ml-2">{{ item.artistName }}</span>
                        <span class="text-xs hover:text-blue-800 ml-2">¥{{ item.price }}.00</span>
                    </div>
                    <div class="mt-1">
                        <t-button shape="round" size="small" variant="outline" @click="buyAlbum(item)">立即购买</t-button>
                    </div>
                </div>
            </div>
            <div>
                <t-dialog v-model:visible="visibleModal" mode="modeless" :footer="false"
                    :on-confirm="() => (visibleModal = false)">
                    <template #header>
                        <div>
                            <MoneyCircleIcon />
                            <span style="vertical-align: middle">购买数字专辑</span>
                        </div>
                    </template>
                    <template #body>
                        <div class="flex flex-col mt-8" v-if="numberAlbumDetail">
                            <div class="flex flex-row">
                                <div class="w-24 h-24">
                                    <img :src="numberAlbumDetail.coverUrl" alt="" />
                                </div>
                                <div class="flex flex-col ml-8 font-bold">
                                    <div>{{ numberAlbumDetail.albumName }}</div>
                                    <div>{{ numberAlbumDetail.artistName }}</div>
                                    <div class="ml-52 mt-12">
                                        <span class="text-black font-bold text-3xl mr-2">{{ numberAlbumDetail.price
                                        }}</span>
                                        <span>元</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10">
                                <t-button block size="large" variant="base" @click="zfbPay(numberAlbumDetail)">
                                    支付宝支付</t-button>
                            </div>
                        </div>
                    </template>
                </t-dialog>
            </div>
        </div>
        <div class="mt-6 flex flex-col">
            <div class="font-medium text-xl mt-2 text-gray-600">数字专辑&数字单曲-榜单</div>
            <div class="mt-4 flex flex-row">
                <div class="mr-4">
                    <t-button :variant="numberAlbumVariant" @click="numberAlbum">数字专辑</t-button>
                </div>
                <div>
                    <t-button :variant="numberSongVariant" @click="numberSong">数字单曲</t-button>
                </div>
            </div>
            <div class="mt-2">
                <t-tabs :default-value="0" :onChange="yearTabOnChange">
                    <template v-if="yearList" v-for="(year, yearIndex) in yearList" :key="yearIndex">
                        <t-tab-panel :value="yearIndex" :label="year.year">
                            <div class="flex flex-row flex-wrap mt-2">
                                <div class="mt-4">
                                    <t-tabs placement="left" :default-value="0" :onChange="listTabOnChange">
                                        <template v-for="(item, i) in list" :key="i">
                                            <t-tab-panel :value="i" :label="item.name">
                                                <div class="flex flex-row flex-wrap ml-2">
                                                    <div class="w-36 h-36 flex flex-col cursor-pointer text-center mb-14 p-1 img"
                                                        v-if="albumSongSaleBoard"
                                                        v-for="(item, index) in albumSongSaleBoard" :key="index">
                                                        <img :src="item.coverUrl" alt="" class="mb-2 rounded-md">
                                                        <span class="text-xs hover:text-blue-800">{{ item.albumName
                                                        }}</span>
                                                        <span class="text-xs hover:text-blue-800">{{ item.artistName
                                                        }}</span>
                                                    </div>
                                                </div>
                                            </t-tab-panel>
                                        </template>
                                    </t-tabs>
                                </div>
                            </div>
                        </t-tab-panel>
                    </template>
                </t-tabs>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/store/modules/user'
import { storeToRefs } from "pinia"
import { MoneyCircleIcon } from 'tdesign-icons-vue-next'

import { getNewAlbum } from "@/api/music/index"
import { getBanner } from "@/api/music/index"
import { geAlbumList } from "@/api/music/index"
import { geAlbumSongSaleBoard } from "@/api/music/index"
import { buyNumberAlbum } from "@/api/music/index"

const userState = userStore()
const { cookie } = storeToRefs<any>(userState)

const visibleModal = ref<boolean>(false)

const newAlbumList = ref<any>()
const bannerList = ref<any>()
const albumProductsList = ref<any>()
const albumSongSaleBoard = ref<any>()

const numberAlbumVariant = ref<any>("base")
const numberSongVariant = ref<any>("outline")

//时间戳
const Dates = new Date()
//年份
const currYear = Dates.getFullYear()

const yearList = ref<any>([{ "year": currYear }, { "year": currYear - 1 }, { "year": currYear - 2 }, { "year": currYear - 3 }, { "year": currYear - 4 }])

const list = ref<any>([{ name: '日榜', type: "daily" }, { name: '周榜', type: "week" }, { name: '年榜', type: "year" }, { name: '总榜', type: "total" }])
const albumSongSaleBoardSearch = ref<any>({ type: "daily", year: 2022, albumType: 0, limit: 30, offset: 0 })

const numberAlbumDetail = ref<any>()

getNewAlbum().then((res: any) => {
    if (res.code === 200) {
        newAlbumList.value = res.albums
    }
})

getBanner().then((res: any) => {
    if (res.code === 200) {
        bannerList.value = res.banners
    }
})

geAlbumList(10).then((res: any) => {
    if (res.code === 200) {
        albumProductsList.value = res.products
    }
})

const geAlbumSongSaleBoardList = (albumSongSaleBoardSearch: any) => {
    geAlbumSongSaleBoard(albumSongSaleBoardSearch).then((res: any) => {
        if (res.code === 200) {
            albumSongSaleBoard.value = res.products
        }
    })
}

geAlbumSongSaleBoardList(albumSongSaleBoardSearch)

const numberAlbum = () => {
    numberAlbumVariant.value = "base"
    numberSongVariant.value = "outline"
    albumSongSaleBoardSearch.value.albumType = 0
    geAlbumSongSaleBoardList(albumSongSaleBoardSearch)
}

const numberSong = () => {
    numberAlbumVariant.value = "outline"
    numberSongVariant.value = "base"
    albumSongSaleBoardSearch.value.albumType = 1
    geAlbumSongSaleBoardList(albumSongSaleBoardSearch)
}

const yearTabOnChange = (item: any) => {
    albumSongSaleBoardSearch.value.year = yearList.value[item].year
    geAlbumSongSaleBoardList(albumSongSaleBoardSearch)
}

const listTabOnChange = (item: any) => {
    albumSongSaleBoardSearch.value.type = list.value[item].type
    geAlbumSongSaleBoardList(albumSongSaleBoardSearch)
}

const buyAlbum = (item: any) => {
    visibleModal.value = true
    numberAlbumDetail.value = item
}

const zfbPay = (item: any) => {
    buyNumberAlbum(item.albumId, 0, 1, cookie.value).then((res: any) => {
        if (res.code === 200) {
            const shell = require('electron').shell

            shell.openExternal(res.payUrl)
        }
    })
}

const openBanner = (item: any) => {
    console.log(item)
}

</script>

<style scoped>
.img:hover {
    transform: translateY(-8px);
}
</style>