<template>
    <div class="mt-4 flex flex-col">
        <div class="m-auto text-sm font-bold">
            请您使用<span class="text-blue-500 m-1">网易云音乐APP</span>扫码登录
        </div>
        <div class="w-36 h-36 m-auto">
            <t-loading size="50px" showOverlay="true" :loading="load">
                <img :src="QRCodeImg" style="width: 100%; height: 100%;" />
            </t-loading>
        </div>
        <div class=" mt-1 m-auto">
            <div class="text-xs font-bold text-blue-600 cursor-pointer" v-show="!reflesh">{{ QRCodeState }}</div>
            <div class="text-xs text-blue-600 cursor-pointer" v-show="reflesh">
                <t-button theme="primary" size="small" @click="createQRCode">刷新</t-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next';
import { generateKey } from "@/api/user/index"
import { generateQRCode } from "@/api/user/index"
import { queryQRCodeState } from "@/api/user/index"
import { getUserDetail } from "@/api/user/index"
import { getLoginState } from "@/api/user/index"
import { userStore } from '@/store/modules/user'
import { storeToRefs } from "pinia";

const userState = userStore()
const { isLoginDialog, isLogin, cookie, userInfo } = storeToRefs<any>( userState );

const QRCodeImg = ref()
const QRCodeState = ref()
const QRCodeStateCode = ref()
const UNI_KEY = ref()
const reflesh = ref(false)
const load = ref(false)

onMounted( () => {
    createQRCode()
} )
            
const createQRCode = () => {
    // load.value = true
    // 生成二维码 key
    let time = new Date().getTime();
    generateKey(time).then( ( res: any ) => {
        if ( res.code === 200 && res.data.code === 200 ) {
            UNI_KEY.value = res.data.unikey
            let time = new Date().getTime();
            generateQRCode(time, res.data.unikey ).then( ( res: any ) => {
                QRCodeImg.value = res.data.qrimg
            })
         }
    } )     
}

const setInterval1 = setInterval( () => {
    checkState()
    if ( QRCodeStateCode.value === 803 ) {
        // 清除定时器
        clearInterval(setInterval1)
    }
}, 2000 )

// 查询二维码状态
// 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
const checkState = () => {
    let time = new Date().getTime();
    queryQRCodeState( UNI_KEY.value, time ).then( ( res: any ) => {
        QRCodeState.value = res.message
        QRCodeStateCode.value = res.code

        if ( res.code === 800 ) {
            reflesh.value = true
        }
        if ( res.code === 802 ) {
            load.value = true
        }
        if ( res.code === 803 ) {
            console.log( res )
            cookie.value = res.cookie
            // 登录成功
            isLogin.value = true
            // 关闭弹窗
            isLoginDialog.value = false
            // 关闭加载动画
            load.value = false
            // 关闭刷新按钮
            reflesh.value = false
            MessagePlugin.success( res.message )
            // 获取登录状态拿到用户UID
            getLoginState( res.cookie ).then( ( res: any ) => {
                // 根据用户UID获取用户信息
                getUserDetail( res.data.account.id ).then( ( res: any ) => {
                    if ( res.code === 200 ) {
                        userInfo.value = res
                    }
                })
            })
        }
    })
}
</script>

<style scoped>
    .shadow-div{
        position: absolute;
        opacity: 0.6;
    }
</style>