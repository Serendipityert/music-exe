import { createApp } from 'vue'
import App from './App.vue'

import './style.css'
import './index.css'
import '@/css/theme.css'

import TDesign from 'tdesign-vue-next'

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css'

// 引入路由 router
import router from './router/index'

// 引入Pinia
import store from './store'

console.log( store )

// 全局守卫：登录拦截 本地没有存token,请重新登录
router.beforeEach( ( to, from, next ) => {
    // 判断有需不需要登录
    if ( to.meta.isLogin ) {
        // if ( store.state.user.isLogin ) {
        //     next()
        // } else {
        //     console.log( '未登录' )
        // }
        next()
    } else {
        next()
    }
} )

const app = createApp( App )

app.use( router )
app.use( TDesign )
app.use( store )

app.mount( '#app' )
