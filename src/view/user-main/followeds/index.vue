<template>
    <!-- 粉丝列表 -->
    <div class="flex flex-col">
        <div class="font-bold text-lg ml-6">{{userInfo.profile.nickname}} 的粉丝</div>
        <div class="ml-6">
            <div class="flex flex-wrap content-start mt-6 ml-2">
                <div class="w-96 h-28 cursor-pointer rounded-sm hover:bg-gray-50 mr-2 p-4 flex flex-row"
                    v-for="(item,index) in  userFollowedsList" :key="index" @click="toIntoFollowDetail(item)">
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
                            <div class="ml-3 text-xs mt-1" v-if="item.followed" @click="addFollow(item)">+ 关注</div>
                            <div class="ml-3 text-xs mt-1" v-else>已关注</div>
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
import { storeToRefs } from "pinia"
import routers from '@/router/index'
import { getUserDetail } from '@/api/user/index'

const userState = userStore()
const { userInfo } = storeToRefs<any>( userState )

const router = useRoute()

// 接收路由参数值, as string 类型断言处理
const userFollowedsList = ref( JSON.parse( router.query.userFollowedsList as string ) )

const toIntoFollowDetail = ( item: any ) => {
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
const addFollow = ( item: any ) => {
    console.log( item )
}

</script>

<style scoped>

</style>