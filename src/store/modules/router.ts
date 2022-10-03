import { defineStore } from 'pinia'

export const routerStore = defineStore( 'router', {
    state: () => {
        return {
            // 上一个路由
            lastRouter: '',
            // 当前路由
            currRouter: '',
            // 下一个路由
            nextRouter: '',
        }
    },
    getters: {
        // 获取上一个路由
        getLastRouter (): string {
            return this.lastRouter
        },
        // 获取当前路由
        getCurrRouter (): string {
            return this.currRouter
        },
        // 获取下一个路由
        getNextRouter (): any {
            return this.nextRouter
        },
    },
    actions: {
        // 设置上一个路由
        setLastRouter ( router: string ): void {
            this.lastRouter = router
        },
        // 设置当前路由
        setCurrRouter ( router: string ): void {
            this.currRouter = router
        },
        // 设置下一个路由
        setNextRouter ( router: any ): void {
            this.nextRouter = router
        },
    }
} )
