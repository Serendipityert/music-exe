import { acceptHMRUpdate, defineStore } from 'pinia'

export const songStore = defineStore('song', {
    state: () => {
        return {
            audio: {
                state: false,
                duration: 1, // 总时间
                currentTime: 0, // 当前时间
                volume: 0.6, // 音量
                mode: 0, // 0:列表循环 1：顺序播放 2：随机播放 3：单曲循环
                mute: false, // 是否静音,
                prev: false, // 上一首
                next: false, // 下一首
                lyric: '' // 歌词
            },
            isPlay: false, // 是否在播放
            musicList: [], // 音乐列表
            musicIndex: 0, // 音乐列表下标
            currMusic: {}, // 当前播放音乐
        }
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [{
            storage: localStorage,
            paths: ['currMusic', 'musicList']
        }]
    },
    getters: {
        getMusicList(): any {
            return this.musicList;
        },
        getMusicIndex(): number {
            return this.musicIndex;
        },
        getAudio(): any {
            return this.audio;
        },
        getCurrMusic(): any {
            return this.currMusic;
        },
        getIsPlay(): boolean {
            return this.isPlay;
        }
    },
    actions: {
        setMusicList(list: any): void {
            this.musicList = list
        },
        setCurrMusic(music: any): void {
            this.currMusic = music
        },
        setAudio(audio: { prop: any | string; value: any; }): void {
            switch (audio.prop) {
                case "state":
                    this.audio.state = audio.value
                case "duration":
                    this.audio.duration = audio.value
                case "currentTime":
                    this.audio.currentTime = audio.value
                case "volume":
                    this.audio.volume = audio.value
                case "mode":
                    this.audio.mode = audio.value
                case "mute":
                    this.audio.mute = audio.value
                case "prev":
                    this.audio.prev = audio.value
                case "next":
                    this.audio.next = audio.value
                case "lyric":
                    this.audio.lyric = audio.value
            }
        },
        setMusicIndex(i: number): void {
            this.musicIndex = i
        },
        setIsPlay(boo: boolean): void {
            this.isPlay = boo
        }
    }
})
