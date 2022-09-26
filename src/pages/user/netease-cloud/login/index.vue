<template>
    <div class="mt-8 flex flex-col">
        <div class="mb-2 ml-10 text-sm font-bold">
            使用<span class="text-blue-500 m-1">网易云音乐APP</span>扫码登录
        </div>
        <div class="w-36 h-36 align-center justify-content m-3 ml-16">
            <img :src="QRCodeImg" style="width: 100%; height: 100%;"/>
        </div>
        <div class="text-xs text-blue-600 ml-28 cursor-pointer" @click="createQRCode()">刷新</div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineComponent } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next';
import { generateKey } from "@/api/user/index"
import { generateQRCode } from "@/api/user/index"
import { queryQRCodeState } from "@/api/user/index"

const QRCodeImg = ref()
const QRCodeState = ref()
const QRCodeStateCode = ref()
const UNI_KEY = ref()

onMounted( () => {
    createQRCode()
} )
            
const createQRCode = () => {
    // 生成二维码 key
    generateKey().then( ( res: any ) => {
        console.log( res )
        if ( res.code === 200 && res.data.code === 200 ) {
            UNI_KEY.value = res.data.unikey
            generateQRCode( res.data.unikey ).then( ( res: any ) => {
                console.log( res )
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
}, 1000 )

// 查询二维码状态
// 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
const checkState = () => {
    let time = new Date().getTime();
    queryQRCodeState( UNI_KEY.value, time.toString() ).then( ( res: any ) => {
        console.log( res.message )
        QRCodeState.value = res.message
        QRCodeStateCode.value = res.code
        if ( res.code === 803 ) {
            MessagePlugin.success( res.message )
            console.log(res)
        }
    }).catch( ( err: any ) => {
         MessagePlugin.warning(err)
    } )
}
</script>

<style scoped>
</style>