<template>
    <div class="flex flex-col mt-1">
        <div class="flex flex-row">
            <div class="w-36 h-36 rounded-full">
                <img style="width: 100%; height: 100%;" class="rounded-full" :src="image" alt="user-img" />
            </div>
            <div class="flex flex-col ml-6 mt-2">
                <div class="text-2xl font-black font-sans">{{ username }}</div>
                <div class="mt-6 text-xs">暂无</div>
                <div class="mt-6 text-xs flex flex-row">
                    <span class="mr-8">粉丝： 4</span>
                    <span>关注： 9</span>
                </div>
            </div>
        </div>
        <div class="mt-1">
            <t-tabs :default-value="1">
                <t-tab-panel :value="1" label="我喜欢">
                    <ILike />
                </t-tab-panel>
                <t-tab-panel :value="2" label="创建的歌单 0">
                    <p style="margin: 20px">创建的歌单</p>
                </t-tab-panel>
                <t-tab-panel :value="3" label="上传的视频">
                    <p style="margin: 20px">上传的视频</p>
                </t-tab-panel>
            </t-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/store/modules/user'
import { storeToRefs } from "pinia";
import ILike from './like/index.vue'

const userState = userStore()
const { userInfo, isLogin } = storeToRefs<any>( userState );

const image = ref('')
const username = ref('')

const setInterval1 = setInterval(() => {
    // 用户没有登录
    image.value = userState.getUserInfo.avatar
    username.value = userState.getUserInfo.username

    if ( isLogin.value ) {
        username.value = userInfo.value.profile.nickname
        image.value = userInfo.value.profile.avatarUrl
        // 清除定时器
        clearInterval(setInterval1)
    }
}, 1000)

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