<template>
    <div class="flex flex-col">
        <div class="flex flex-row">
            <div class="w-64 h-48 mr-6">
                <img :src="userDetail.avatarUrl" alt="" style="width: 100%; height: 100%;" class="rounded-full">
            </div>
            <div class="flex flex-col w-full h-50">
                <div class="flex flex-col">
                    <div class="text-2xl font-bold">{{userDetail.nickname}}</div>
                    <div class="mt-2 h-4 text-xs flex flex-row justify-between">
                        <div class="flex flex-row">
                            <div class="bg-gray-100 w-8 rounded-lg">
                                <span class="ml-1">Lv {{userInfo.level}}</span>
                            </div>
                            <div class="-mt-1 ml-2 w-32">
                                <div v-if="userDetail.gender === 2">
                                    <svg t="1664785501921" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="28259" width="24" height="24">
                                        <path
                                            d="M512 105.5c-220.6 0-399.5 178.9-399.5 399.5S291.4 904.5 512 904.5 911.5 725.6 911.5 505 732.6 105.5 512 105.5z m200 621.9H561.5v75.1h-99.1v-75.1H312V627.3h150.4v-6.2c-33.6-8.6-65.5-25.9-91.8-52.2-78-78-78-204.5 0-282.5s204.5-78 282.5 0 78 204.5 0 282.5c-26.3 26.3-58.1 43.7-91.7 52.2v6.2h150.4v100.1h0.2z"
                                            fill="#FF4D94" p-id="28260"></path>
                                        <path
                                            d="M582.4 356.1c-39.1-39.1-102.5-39.1-141.6 0-39.1 39.1-39.1 102.4 0 141.5 39.1 39.1 102.5 39.1 141.6 0 39.1-39 39.1-102.4 0-141.5z"
                                            fill="#FF4D94" p-id="28261"></path>
                                    </svg>
                                </div>
                                <div v-else>
                                    <svg t="1664785472890" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="24441" width="24" height="24">
                                        <path
                                            d="M512 105.3c-220.7 0-399.7 179-399.7 399.7s179 399.7 399.7 399.7 399.7-179 399.7-399.7-179-399.7-399.7-399.7z m241.6 270.8h-0.5v175.4h-99.8v-90.1l-46.6 49.7c13.7 27.1 21.4 57.6 21.4 90 0 110.4-89.5 200-199.9 200s-199.9-89.5-199.9-200 89.5-200 199.9-200c36.1 0 70.1 9.6 99.3 26.4l48.3-51.4h-97.5v-99.7h275.3v99.7z"
                                            fill="#0091FF" p-id="24442"></path>
                                        <path
                                            d="M428 501.5c-55.1 0-99.7 44.8-99.7 100s44.6 100 99.7 100 99.7-44.8 99.7-100-44.7-100-99.7-100z"
                                            fill="#0091FF" p-id="24443"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div class="w-20 mr-2">
                                <div class="flex flex-row border w-20 h-8 rounded-3xl hover:bg-gray-100 cursor-pointer">
                                    <div class="mt-1.5 ml-2">
                                        <svg t="1664786817286" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="34987" width="20" height="20">
                                            <path
                                                d="M64 512c0 160.055 85.388 307.952 224 387.98 138.612 80.027 309.388 80.027 448 0C874.612 819.951 960 672.054 960 512c0-247.424-200.576-448-448-448S64 264.576 64 512z"
                                                fill="#E78AF2" p-id="34988"></path>
                                            <path
                                                d="M691.2 736H332.8c-56 0-100.8-44.8-100.8-99.4v-245c0-57.4 44.8-103.6 100.8-103.6h358.4c56 0 100.8 46.2 100.8 103.6v245c0 54.6-44.8 99.4-100.8 99.4m-16.8-317.8c-4.2-8.4-12.6-12.6-21-12.6-4.2 0-8.4 1.4-12.6 2.8l-133 81.2-120.4-81.2c-4.2-2.8-9.8-2.8-14-2.8-9.8 0-19.6 4.2-23.8 12.6-8.4 11.2-2.8 26.6 9.8 33.6L491 537.2c4.2 2.8 8.4 2.8 12.6 2.8h8.4c4.2 0 8.4-1.4 12.6-2.8l140-85.4c12.6-7 16.8-21 9.8-33.6"
                                                fill="#F9EFFF" p-id="34989"></path>
                                        </svg>
                                    </div>
                                    <div class="mt-2 ml-1">发私信</div>
                                </div>
                            </div>
                            <div class="w-24">
                                <div class="flex flex-row border w-24 h-8 rounded-3xl hover:bg-gray-100 cursor-pointer">
                                    <div class="ml-1">
                                        <svg t="1664786925552" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="36074" width="28" height="28">
                                            <path
                                                d="M733.9 579.3c0 17.1-13.4 31-30.5 31.6H398.3l21.3 21.3c6 6 9.3 13.9 9.3 22.4 0 8.5-3.3 16.4-9.3 22.4-6 6-13.9 9.3-22.4 9.3-8.5 0-16.4-3.3-22.4-9.3l-74.6-74.5c-6.5-6-10.2-14.4-10.2-23.3 0-7.7 2.8-15.2 7.9-20.9 6-6.8 14.6-10.7 23.7-10.7h379.8c8.3-0.2 16.2 2.8 22.3 8.4 6.2 5.7 9.8 13.6 10.1 22 0.1 0.5 0.1 0.9 0.1 1.3zM290.1 444.7c0-17.1 13.4-31 30.5-31.6h305.2l-21.3-21.3c-6-6-9.3-13.9-9.3-22.4 0-8.5 3.3-16.4 9.3-22.4 6-6 13.9-9.3 22.4-9.3 8.5 0 16.4 3.3 22.4 9.3l74.6 74.5c6.5 6 10.2 14.4 10.2 23.3 0 7.7-2.8 15.2-7.9 20.9-6 6.8-14.6 10.7-23.7 10.7h-380c-8.3 0.2-16.2-2.8-22.3-8.4-6.2-5.7-9.8-13.6-10.1-22v-1.3z"
                                                fill="#1296db" p-id="36075"></path>
                                        </svg>
                                    </div>
                                    <div class="mt-1.5">相互关注</div>
                                </div>
                            </div>
                            <div class="w-12 ml-2 mr-2">
                                <div class="ml-1 w-8 h-8 border rounded-3xl hover:bg-gray-100 cursor-pointer">
                                    <svg t="1664787536659" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="41479" width="30" height="30">
                                        <path
                                            d="M286.72 517.12m-56.32 0a56.32 56.32 0 1 0 112.64 0 56.32 56.32 0 1 0-112.64 0Z"
                                            p-id="41480" fill="#8a8a8a"></path>
                                        <path
                                            d="M522.24 517.12m-56.32 0a56.32 56.32 0 1 0 112.64 0 56.32 56.32 0 1 0-112.64 0Z"
                                            p-id="41481" fill="#8a8a8a"></path>
                                        <path
                                            d="M757.76 517.12m-56.32 0a56.32 56.32 0 1 0 112.64 0 56.32 56.32 0 1 0-112.64 0Z"
                                            p-id="41482" fill="#8a8a8a"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <t-divider />
                <div class="flex flex-col">
                    <div class="flex flex-row">
                        <div class="w-16">
                            <div class="ml-2">{{userInfo.profile.eventCount}}</div>
                            <div class="text-xs">动态</div>
                        </div>
                        <div class="w-16">
                            <div class="ml-2">{{userInfo.profile.follows}}</div>
                            <div class="text-xs">关注</div>
                        </div>
                        <div class="w-16">
                            <div class="ml-2">{{userInfo.profile.followeds}}</div>
                            <div class="text-xs">粉丝</div>
                        </div>
                    </div>
                    <div class="flex flex-col text-xs">
                        <div class="mt-2">所在地区：{{userInfo.profile.province}} - {{userInfo.profile.city}}</div>
                        <div class="mt-1">社交网络：{{}}</div>
                        <div class="mt-1">
                            <div v-if="userInfo.profile.signature === ''">
                                个人介绍：暂无介绍
                            </div>
                            <div v-else>
                                个人介绍：{{userInfo.profile.signature}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <t-tabs :default-value="1">
                <t-tab-panel :value="1" label="您的歌单">
                    <PlayList :playList="playList" />
                </t-tab-panel>
                <t-tab-panel :value="3" label="收藏的博客">
                    <p style="margin: 20px">收藏的博客</p>
                </t-tab-panel>
                <t-tab-panel :value="4" label="创建的音乐专栏">
                    <p style="margin: 20px">创建的音乐专栏</p>
                </t-tab-panel>
            </t-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import PlayList from '@/view/user-main/play-list/index.vue'
import { getUserPlayList } from '@/api/user/index'

const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const userDetail = ref( JSON.parse( router.query.userDetail as string ) )
const userInfo = ref( JSON.parse( router.query.userInfo as string ) )

const playList = ref<any>()

// console.log( userDetail.value )
// console.log( userInfo.value )

onMounted( () => {
    getPlayList()
} )

const getPlayList = () => {
    getUserPlayList( userInfo.value.profile.userId ).then( ( res: any ) => {
        console.log( res )
        if ( res.code === 200 ) {
            playList.value = res.playlist
        }
    } )
}
</script>

<style scoped>

</style>