<template>
    <div class="flex flex-col">
        <div class="flex flex-wrap content-start mt-1 ">
            <div class="img w-96 h-40 cursor-pointer rounded-md bg-gray-50 mb-10 mr-6 text-center flex flex-row"
                v-if="rankingList" v-for="(item, index) in rankingList" :key="index" @click="rankingDetail(item)">
                <div class="w-44 ">
                    <img :src="item.coverImgUrl" alt="" style="width: 100%; height: 100%;" class="rounded-xl mb-2" />
                    <div class="ml-10 text-white -mt-12 text-xs absolute font-bold">{{ formatDate(item.updateTime) }}更新
                    </div>
                </div>
                <div class="w-36 ml-4 flex flex-col">
                    <div class="font-bold text-lg mt-4 truncate hover:text-blue-800">{{ item.name }}</div>
                    <div class="text-xs h-12 overflow-ellipsis overflow-hidden mt-3">{{ item.description }}
                    </div>
                    <div
                        class="mt-4 p-1 w-full bg-gray-400 bg-opacity-60 hover:bg-opacity-100 rounded-lg flex flex-row justify-center">
                        <div class="font-bold">
                            <svg t="1666674426077" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="10745" width="16" height="16">
                                <path
                                    d="M935.4 652.1c13.6-32.9 4.3-69.9-20.6-92.8 2.6-18.6 3.9-37.4 3.9-56.4 0-55-10.8-108.3-32-158.6-20.5-48.5-49.9-92.1-87.3-129.5-37.4-37.4-81-66.8-129.5-87.3-50.2-21.2-103.6-32-158.6-32s-108.3 10.8-158.6 32c-48.5 20.5-92.1 49.9-129.5 87.3-37.4 37.4-66.8 81-87.3 129.5-21.2 50.2-32 103.6-32 158.6 0 19.4 1.3 38.5 4 57.4-25 23.3-34.7 60.4-21.9 93.9-14 11.9-23 29.7-23 49.7 0 35.9 29.1 65 65 65 2.2 0 4.4-0.1 6.6-0.3l14.8 34.9c18.5 43.6 69.3 64.1 112.9 45.6 43.6-18.5 64.1-69.3 45.6-112.9l-62.2-146.4c-12.2-28.8-38.5-47.5-67.5-51.6-1.2-11.6-1.9-23.4-1.9-35.3 0-184.7 150.2-334.9 334.9-334.9s334.9 150.2 334.9 334.9c0 12.1-0.6 24-1.9 35.8-26.8 4.8-50.8 22.5-62.2 49.3l-60 141.3c-17.9 42.1 1.9 91.1 44 108.9 42.1 17.9 91.1-1.9 108.9-44l11-26c3.3 0.5 6.6 0.8 10 0.8 35.9 0 65-29.1 65-65 0.3-21.3-9.8-40.1-25.5-51.9z m-742.3-7.5c22 0 39.7 17.8 39.7 39.7S215 724 193.1 724s-39.7-17.8-39.7-39.7 17.8-39.7 39.7-39.7z m638.5 79.5c-22 0-39.7-17.8-39.7-39.7s17.8-39.7 39.7-39.7c22 0 39.7 17.8 39.7 39.7s-17.8 39.7-39.7 39.7z"
                                    p-id="10746" fill="#ffffff"></path>
                            </svg>
                        </div>
                        <div class="ml-1 text-white text-xs font-bold">{{ numberFormat(item.playCount) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from '@/router/index'
import { getRanking } from "@/api/music/index"
import { getPlayListDetail } from "@/api/user/index"
import { formatDate } from "@/util/date"
import { numberFormat } from "@/util/number"

const rankingList = ref<any>()

getRanking().then((res: any) => {
    if (res.code === 200) {
        rankingList.value = res.list
    }
})
const rankingDetail = (item: any) => {
    getPlayListDetail(item.id).then((res: any) => {
        if (res.code === 200) {
            router.push({
                path: '/ranking-detail',
                query: {
                    ranking: JSON.stringify(item),
                    rankingDetail: JSON.stringify(res),
                    date: Date.now(),
                }
            })
        }
    })
}
</script>

<style scoped>
.img:hover {
    transform: translateY(-8px);
}
</style>
