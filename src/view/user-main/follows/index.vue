<template>
    <!-- 关注列表 -->
    <div class="flex flex-col">
        <div class="font-bold text-lg ml-6">{{userInfo.profile.nickname}} 的关注</div>
        <div class="ml-6">
            <div class="flex flex-wrap content-start mt-6 ml-2">
                <div class="w-96 h-28 cursor-pointer rounded-sm hover:bg-gray-50 mr-2 p-4 flex flex-row"
                    v-for="(item,index) in  userFollowsList" :key="index" @click="toIntoFollowsDetail(item)">
                    <div class="h-24 w-24 -mt-2">
                        <img :src="item.avatarUrl" alt="" style="width: 100%; height: 100%;" class="rounded-full" />
                    </div>
                    <div class="flex flex-col w-44 h-24 ml-4">
                        <div class="text-sm">{{item.nickname}}</div>
                        <div class="w-36 h-4 truncate text-xs mt-6">{{item.signature}}</div>
                        <div class="text-xs mt-1 flex flex-row">
                            <div class="mr-4">歌单： {{item.playlistCount}}</div>
                            <div>|</div>
                            <div class="ml-4">粉丝： {{item.followeds}}</div>
                        </div>
                    </div>
                    <div class="w-20 h-24">
                        <div class="w-16 h-6 border rounded-lg flex flex-row m-auto mt-8 hover:bg-gray-200">
                            <div class="ml-1 mt-0.5">
                                <svg t="1664780709621" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2328" width="18" height="18">
                                    <path
                                        d="M771.584 835.584H250.368c-62.976 0-114.176-51.2-114.176-114.176V330.24c0-62.976 51.2-114.176 114.176-114.176h521.216c62.976 0 114.176 51.2 114.176 114.176v391.168c0 62.976-51.2 114.176-114.176 114.176zM250.368 282.624c-26.112 0-47.616 21.504-47.616 47.616v391.168c0 26.112 21.504 47.616 47.616 47.616h521.216c26.112 0 47.616-21.504 47.616-47.616V330.24c0-26.112-21.504-47.616-47.616-47.616H250.368z"
                                        fill="" p-id="2329"></path>
                                    <path
                                        d="M510.976 540.672c-26.624 0-53.248-8.704-74.752-26.112L163.84 293.888l41.984-51.712 272.384 220.16c18.944 15.36 47.104 15.36 66.048 0l272.384-220.16 41.984 51.712-272.384 220.16c-22.016 17.92-48.64 26.624-75.264 26.624z"
                                        fill="" p-id="2330"></path>
                                </svg>
                            </div>
                            <div class="ml-2 text-xs mt-1">私信</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { userStore } from '@/store/modules/user'
import { useRoute } from "vue-router"
import routers from '@/router/index'
import { storeToRefs } from "pinia"
import { getUserDetail } from '@/api/user/index'

const userState = userStore()
const { userInfo } = storeToRefs<any>( userState )

const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const userFollowsList = ref( JSON.parse( router.query.userFollowsList as string ) )

const toIntoFollowsDetail = ( item: any ) => {
    getUserDetail( item.userId ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            routers.push( {
                path: '/user-detail',
                query: {
                    userDetail: JSON.stringify( item ),
                    userInfo: JSON.stringify( res ),
                    date: Date.now(),
                }
            } )
        }
    } )
}
</script>

<style scoped>

</style>