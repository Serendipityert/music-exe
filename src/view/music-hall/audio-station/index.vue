<template>
    <div class="flex flex-col">
        <div class="flex flex-col">
            <div class="font-medium text-xl text-gray-600">今日优选
            </div>
            <div class="ml-4 flex flex-wrap content-start">
                <div class="w-36 h-36 cursor-pointer rounded-sm mr-6 mb-3 p-2 text-center img"
                    v-if=" radioTodayPreferredList " v-for="(      item, index      ) in radioTodayPreferredList"
                    :key=" index " @click=" openRadioStation( item ) ">
                    <img :src=" item.picUrl " alt="" style="width: 100%; height: 100%;" class="mb-2 rounded-lg" />
                    <span class="text-xs">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="mt-8 flex flex-col">
            <div class="font-medium text-xl text-gray-600">个性推荐
            </div>
            <div class="ml-4 flex flex-wrap content-start">
                <div class="w-36 h-36 cursor-pointer rounded-sm mr-2 mt-4 mb-8 p-1 text-center img"
                    v-if=" personalizedRecommendList " v-for="(      item, index      ) in personalizedRecommendList"
                    :key=" index " @click=" openRadioStation( item ) ">
                    <img :src=" item.picUrl " alt="" style="width: 100%; height: 100%;" class="mb-2 rounded-md">
                    <span class="text-xs">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="mt-6 flex flex-col">
            <div class="font-medium text-xl text-gray-600">精选分类
            </div>
            <div class="ml-4 flex flex-wrap content-start">
                <div class="w-20 h-20 cursor-pointer rounded-sm mr-4 mb-3 p-2 text-center img"
                    v-if=" radioClassificationList " v-for="(      item, index      ) in radioClassificationList"
                    :key=" index " @click=" openRadioStation( item ) ">
                    <img :src=" item.picIPadUrl " alt="" style="width: 100%; height: 100%;">
                    <span class="text-xs">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="mt-6 flex flex-col">
            <div class="font-medium text-xl text-gray-600">付费精选
            </div>
            <div class="ml-4 flex flex-wrap content-start">
                <div class="w-36 h-36 cursor-pointer rounded-sm mr-2 mt-4 mb-8 p-1 text-center img"
                    v-if=" payRadioClassificationList " v-for="(      item, index      ) in payRadioClassificationList"
                    :key=" index " @click=" openRadioStation( item ) ">
                    <img :src=" item.picUrl " alt="" style="width: 100%; height: 100%;" class="mb-2 rounded-md">
                    <span class="text-xs">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router/index'
import { MessagePlugin } from 'tdesign-vue-next'
import { getRadioClassification } from '@/api/music/index'
import { getRadioClassificationTodayPreferred } from '@/api/music/index'
import { getPayRadioClassification } from '@/api/music/index'
import { getRadioClassificationDetail } from '@/api/music/index'
import { getRadioPersonalizedRecommend } from '@/api/music/index'

const radioTodayPreferredList = ref<any>()
const radioClassificationList = ref<any>()
const payRadioClassificationList = ref<any>()
const personalizedRecommendList = ref<any>()

getRadioClassificationTodayPreferred().then( ( res: any ) => {
    if ( res.code === 200 ) {
        radioTodayPreferredList.value = res.data
    }
} )

getRadioPersonalizedRecommend( 6 ).then( ( res: any ) => {
    console.log( res )
    if ( res.code === 200 ) {
        personalizedRecommendList.value = res.data
    }
} )

getPayRadioClassification( 20, 0 ).then( ( res: any ) => {
    if ( res.code === 200 ) {
        payRadioClassificationList.value = res.data.list
    }
} )

getRadioClassification().then( ( res: any ) => {
    if ( res.code === 200 ) {
        radioClassificationList.value = res.categories
    }
} )

const openRadioStation = ( item: any ) => {
    getRadioClassificationDetail( item.id ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            router.push( {
                path: '/radio-detail',
                query: {
                    radioStation: JSON.stringify( item ),
                    radioStationDetail: JSON.stringify( res.data ),
                    date: Date.now(),
                }
            } )
        } else if ( res.code === 404 ) {
            MessagePlugin.warning( res.msg )
        }
    } )
}

</script>

<style scoped>
.img:hover {
    transform: translateY(-8px);
}
</style>