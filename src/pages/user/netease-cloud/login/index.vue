<template>
    <div class="mt-4 flex flex-col">
        <div class="m-auto text-sm font-bold">
            请您使用<span class="text-blue-500 m-1">网易云音乐APP</span>扫码登录
        </div>
        <div class="w-36 h-36 m-auto">
            <t-loading :text="QRCodeState" size="small" showOverlay="true" :loading="load">
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
    load.value = false
    // 生成二维码 key
    generateKey().then( ( res: any ) => {
        if ( res.code === 200 && res.data.code === 200 ) {
            UNI_KEY.value = res.data.unikey
            let time = new Date().getTime();
            generateQRCode(time, res.data.unikey ).then( ( res: any ) => {
                QRCodeImg.value = res.data.qrimg
            }).catch( ( err: any ) => {
                 MessagePlugin.warning(err)
            } )
         }
    } ).catch( ( err: any ) => {
        MessagePlugin.warning(err)
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
        console.log( res.message )
        QRCodeState.value = res.message
        QRCodeStateCode.value = res.code

        if ( res.code === 800 ) {
            reflesh.value = true
        }
        if ( res.code === 802 ) {
            load.value = true
        }
        if ( res.code === 803 ) {
            load.value = false
            reflesh.value = false
            MessagePlugin.success( res.message )
        }
    }).catch( ( err: any ) => {
         MessagePlugin.warning(err)
    } )
}
</script>

<style scoped>
    .shadow-div{
        position: absolute;
        opacity: 0.6;
    }
</style>