<template>
    <div class="flex flex-col">
        <div class="flex flex-col">
            <div class="flex flex-wrap content-start ml-2">
                <div class="w-20 h-10 cursor-pointer mr-4 p-2" v-for="(item,index) in area" :key="index"
                    @click="search.area = item.num">
                    <t-button shape="round" :variant="variant"
                        v-if="search.area === item.num ? variant = 'base' : variant = 'outline'" class="w-20">{{
                        item.name }}</t-button>
                </div>
            </div>
            <div class="flex flex-wrap content-start mt-2 ml-1">
                <div class="w-20 h-10 cursor-pointer mr-4 p-4" v-for="(item,index) in type" :key="index"
                    @click="search.type = item.num">
                    <t-button shape="round" :variant="variant" class="w-20"
                        v-if="search.type === item.num ? variant = 'base' : variant = 'outline'">{{ item.name }}
                    </t-button>
                </div>
            </div>
        </div>
        <div class="mt-4 flex flex-col">
            <div class="flex flex-wrap content-start mt-4 ml-3">
                <div class=" cursor-pointer mr-1 hover:text-blue-700" v-for="(item,index) in alphabet" :key="index"
                    @click="search.alphabet = item">
                    <t-button style="width: 25px; height: 25px;" shape="circle" :variant="variant1"
                        v-if="(search.alphabet === item || search.alphabet === '0' ) ? variant1 = 'base' : variant1 = 'text'">
                        {{item}}
                    </t-button>
                </div>
            </div>
        </div>
        <div class="mt-2 flex flex-col">
            <div class="flex flex-wrap content-start mt-4 ml-3">
                <div class="w-36 h-36 cursor-pointer rounded-xl mb-6 mr-2 p-2" v-if="songerList"
                    v-for="(item,index) in songerList" :key="index" @click="openSonger(item)">
                    <img :src="item.picUrl" alt="" style="width: 100%; height: 100%;"
                        class="cursor-pointer rounded-full" />
                    <div class="hover:text-blue-700 text-center mt-2 mb-2">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { getSongerList } from '@/api/music/index'

const songerList = ref<any>()
const variant = ref<any>( 'outline' )
const variant1 = ref<any>( 'text' )

const type = ref<any>( [ { "name": "全部", "num": -1 }, { "name": "男", "num": 1 }, { "name": "女", "num": 2 }, { "name": "乐队", "num": 3 } ] )
const area = ref<any>( [ { "name": "全部", "num": -1 }, { "name": "华语", "num": 7 }, { "name": "欧美", "num": 96 }, { "name": "日本", "num": 8 }, { "name": "韩国", "num": 16 }, { "name": "其他", "num": 0 } ] )
const alphabet = ref<any>( [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#" ] )
const search = ref<any>( { "type": -1, "area": -1, "alphabet": "A" } )

getSongerList( search.value.type, search.value.area, search.value.alphabet, 60 ).then( ( res: any ) => {
    if ( res.code === 200 ) {
        songerList.value = res.artists
    }
} )

watch( search.value, () => {
    if ( search.value.alphabet === '#' ) {
        search.value.alphabet = '0'
    }

    getSongerList( search.value.type, search.value.area, search.value.alphabet, 60 ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            songerList.value = res.artists
        }
    } )
} )

// 进入某个歌手详情页面
const openSonger = ( item: any ) => {
    console.log( item )
}

</script>

<style scoped>

</style>