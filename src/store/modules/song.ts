import { acceptHMRUpdate, defineStore } from 'pinia'

export const songStore = defineStore( 'song', {
    state: () => {
        return {
            isPlay: false, // 是否在播放
            musicList: [], // 音乐列表
            musicIndex: 0, // 音乐列表下标
            currMusic: {}, // 当前播放音乐
            playMode: 2 // 播放方式
        }
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [ {
            storage: localStorage,
            paths: [ 'currMusic', 'musicList', 'playMode' ]
        } ]
    },
    getters: {
        getMusicList (): any {
            return this.musicList
        },
        getPlayMode (): number {
            return this.playMode
        },
        getMusicIndex (): number {
            return this.musicIndex
        },
        getCurrMusic (): any {
            return this.currMusic
        },
        getIsPlay (): boolean {
            return this.isPlay
        }
    },
    actions: {
        setMusicList ( list: any ): void {
            this.musicList = list
        },
        setCurrMusic ( music: any ): void {
            this.currMusic = music
        },

        setMusicIndex ( i: number ): void {
            this.musicIndex = i
        },
        setIsPlay ( boo: boolean ): void {
            this.isPlay = boo
        },
        setPlayMode ( playMode: number ): void {
            this.playMode = playMode
        },
    }
} )
