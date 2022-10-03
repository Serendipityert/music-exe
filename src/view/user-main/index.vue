<template>
    <div class="flex flex-col mt-1">
        <div class="flex flex-row">
            <div class="w-36 h-36 rounded-full">
                <img style="width: 100%; height: 100%;" class="rounded-full" :src="image" alt="user-img" />
            </div>
            <div class="flex flex-col ml-6 mt-2">
                <div class="text-2xl font-black font-sans">{{ username }}</div>
                <div class="mt-6 text-xs flex flex-row">
                    <span class="mr-8 cursor-pointer hover:text-red-600" @click="toUserFollows">关注：{{
                    userInfo.profile.follows }}</span>
                    <span class="mr-8 cursor-pointer hover:text-red-600" @click="toUserFolloweds">粉丝：{{
                    userInfo.profile.followeds }}</span>
                </div>
                <div class="mt-6 text-xs flex flex-row">
                    <span class="mr-8 cursor-pointer hover:text-red-600" @click="userLevel">LV： {{ userInfo.level
                    }}</span>
                    <!-- <span class="mr-8">MV： {{ userCollectionMvQuantity.mvCount }}</span> -->
                    <!-- <span class="mr-8">艺术家： {{ userCollectionMvQuantity.artistCount }}</span> -->
                    <!-- <span class="mr-8">DJ： {{ userCollectionMvQuantity.djRadioCount }}</span> -->
                    <span class="mr-8">创建时间： {{formatDate(new Date(userInfo.createTime))}}</span>
                </div>
            </div>
        </div>
        <div class="mt-1">
            <t-tabs :default-value="1">
                <t-tab-panel :value="1" label="我喜欢">
                    <ILike />
                </t-tab-panel>
                <t-tab-panel :value="2" :label="'您的歌单  ' ">
                    <PlayList :playList="playList" />
                </t-tab-panel>
                <t-tab-panel :value="3" label="上传的视频">
                    <p style="margin: 20px">上传的视频</p>
                </t-tab-panel>
            </t-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { formatDate } from "@/util/date"
import { userStore } from '@/store/modules/user'
import router from '@/router/index'
import { storeToRefs } from "pinia"
import ILike from './like/index.vue'
import PlayList from './play-list/index.vue'
import { getUserCollectionMvQuantity } from '@/api/user/index'
import { getUserPlayList } from '@/api/user/index'
import { getUserLevel } from '@/api/user/index'
import { getUserFollows } from '@/api/user/index'
import { getUserFolloweds } from '@/api/user/index'

const userState = userStore()
const { userInfo, isLogin, cookie } = storeToRefs<any>( userState )

const image = ref( '' )
const username = ref( '' )
const userCollectionMvQuantity = ref<any>()
const playList = ref<any>()

onMounted( () => {
    getPlayList()
} )

const setInterval1 = setInterval( () => {
    // 用户没有登录
    image.value = userState.getUserInfo.avatar
    username.value = userState.getUserInfo.username
    getCollectionMvQuantity()

    if ( isLogin.value ) {
        username.value = userInfo.value.profile.nickname
        image.value = userInfo.value.profile.avatarUrl

        // 清除定时器
        clearInterval( setInterval1 )
    }
}, 1000 )

// 获取用户信息 , 歌单，收藏，mv, dj 数量
const getCollectionMvQuantity = () => {
    getUserCollectionMvQuantity( cookie.value ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            userCollectionMvQuantity.value = res
        }
    } )
}

// 获取用户歌单
const getPlayList = () => {
    getUserPlayList( userInfo.value.userPoint.userId ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            playList.value = res.playlist
        }
    } )
}

// 获取用户等级信息
const userLevel = () => {
    getUserLevel( cookie.value ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            router.push( {
                path: '/user-level-detail',
                query: {
                    userLevelInfo: JSON.stringify( res.data ),
                    date: Date.now(),
                }
            } )
        }
    } )
}

// 获取用户关注列表
const toUserFollows = () => {
    getUserFollows( userInfo.value.profile.userId ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            router.push( {
                path: '/user-follow',
                query: {
                    userFollowsList: JSON.stringify( res.follow ),
                    date: Date.now(),
                }
            } )
        }

    } )
}

// 获取用户粉丝列表信息
const toUserFolloweds = () => {
    getUserFolloweds( userInfo.value.profile.userId ).then( ( res: any ) => {
        if ( res.code === 200 ) {
            router.push( {
                path: '/user-followeds',
                query: {
                    userFollowedsList: JSON.stringify( res.followeds ),
                    date: Date.now(),
                }
            } )
        }
    } )
}

</script>

<style>
.t-tabs__nav-container.t-is-top:after {
    content: "";
    width: 100%;
    height: 0px;
    position: absolute;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    background-color: var(--td-bg-color-secondarycontainer);
}

.t-tabs__nav-item-wrapper {
    font-size: 13px;
    display: block;
    padding: 5px 8px;
    margin-left: 8px;
    margin-right: 8px;
    line-height: 22px;
    border-radius: var(--td-radius-default);
    transition: background-color cubic-bezier(.38, 0, .24, 1) .2s;
    --ripple-color: var(--td-bg-color-container-active);
}
</style>