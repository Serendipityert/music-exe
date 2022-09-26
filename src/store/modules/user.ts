import { defineStore } from 'pinia'

export const userStore = defineStore( 'user', {
    state: () => {
        return {
            // 是否登录
            isLogin: false,
            // 登录弹窗
            isLoginDialog: false,
            // token
            token: '',
            // cookie
            cookie: '',
            // 用户信息
            userInfo: {}
        }
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [ {
            storage: localStorage,
            paths: [ 'isLogin', 'token', 'cookie', 'userInfo' ]
        } ]
    },
    getters: {
        // 获取登录状态
        getIsLogin (): boolean {
            return this.isLogin
        },
        // 获取登录弹窗
        getIsLoginDialog (): boolean {
            return this.isLoginDialog
        },
        // 获取用户信息
        getUserInfo (): any {
            return this.userInfo
        },
        // 获取用户token
        getToken (): string {
            return this.token
        },
        // 获取用户cookie
        getCookie (): string {
            return this.cookie
        }
    },
    actions: {
        // 设置登录状态
        setIsLogin ( login: boolean ): void {
            this.isLogin = login
        },
        // 设置登录弹窗
        setIsLoginDialog ( isLoginDialog: boolean ): void {
            this.isLoginDialog = isLoginDialog
        },
        // 设置用户信息
        setUserInfo ( user: any ): void {
            this.userInfo = user
        },
        // 设置token
        setToken ( token: string ): void {
            this.token = token
        },
        // 设置cookie
        setCookie ( cookie: string ): void {
            this.cookie = cookie
        }
    }
} )