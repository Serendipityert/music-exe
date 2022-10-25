<template>
    <div class="flex flex-col">
        <div class="mb-2 flex flex-col">
            <div class="font-medium text-xl mt-1 text-gray-600">歌单分类</div>
            <div class="mt-2 ml-2">
                <t-tabs :default-value="-1" placement="left">
                    <t-tab-panel :value="-1" label="全部">
                        <div class="flex flex-row flex-wrap mt-2 ml-6">
                            <div v-if="playlistCatList" v-for="(it, i) in playlistCatList" :key="i">
                                <t-button variant="text" theme="success">
                                    <div class="flex flex-row">
                                        <div class="text-xs">{{ it.name }}</div>
                                        <div v-if="it.hot" class="text-red-500 -mt-1 ml-0.5 font-bold"
                                            style="font-size: 6px;">HOT</div>
                                    </div>
                                </t-button>
                            </div>
                        </div>
                    </t-tab-panel>
                    <t-tab-panel v-if="categoriesList" v-for="(item, index) in categoriesList" :key="index"
                        :value="index" :label="item">
                        <div class="flex flex-row flex-wrap mt-4 ml-6">
                            <div v-if="playlistCatList" v-for="(it, i) in playlistCatList" :key="i">
                                <template v-if="index + '' === it.category + ''">
                                    <t-button variant="text" theme="success">
                                        <div class="flex flex-row">
                                            <div class="text-xs" style="font-size: 14px;">{{ it.name }}</div>
                                            <div v-if="it.hot" class="text-red-500 -mt-1 ml-0.5 font-bold"
                                                style="font-size: 6px;">HOT
                                            </div>
                                        </div>
                                    </t-button>
                                </template>
                            </div>
                        </div>
                    </t-tab-panel>
                </t-tabs>
            </div>
        </div>
        <div class="mt-2 flex flex-col">
            <div class="font-medium text-xl mt-1 text-gray-600">精选歌单</div>
            <div class="flex flex-wrap content-start mt-2 ml-2">
                <div class="w-36 h-36 cursor-pointer rounded-xl mb-14 mr-2 p-1 img" v-if="boutiquePlayList"
                    v-for="(item, index) in boutiquePlayList" :key="index" @click="openBoutiquePlayList(item)">
                    <img :src="item.coverImgUrl" alt="" style="width: 100%; height: 100%;" class="rounded-md">
                    <span class="text-xs hover:text-blue-800">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import router from '@/router/index'
import { getPlaylistCatList } from '@/api/music/index'
import { getBoutiquePlayList } from '@/api/music/index'

const categoriesList = ref<any>()
const playlistCatList = ref<any>()
const boutiquePlayList = ref<any>()

getPlaylistCatList().then((res: any) => {
    if (res.code === 200) {
        categoriesList.value = res.categories
        playlistCatList.value = res.sub
    }
})

getBoutiquePlayList(99).then((res: any) => {
    if (res.code === 200) {
        boutiquePlayList.value = res.playlists
    }
})

const openBoutiquePlayList = (item: any) => {
    console.log(item)
}
</script>

<style scoped>
.img:hover {
    transform: translateY(-8px);
}
</style>