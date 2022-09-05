import { defineStore } from 'pinia'

export const songStore = defineStore('song', {
    state: () => {
        return {
            songId: '',
            songUrl: '',
            songName: '',
        }
    },
    getters: {
        getSongUrl() {
            return (songUrl: string) => this.songUrl
        },
        getSongName() {
            return (songName: string) => this.songName
        }
    },
    actions: {
        saveSongUrl(url: string) {
            this.songUrl = url
        },
        saveSongName(name: string) {
            this.songName = name
        }
    }
})