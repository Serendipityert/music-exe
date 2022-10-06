import { defineStore } from 'pinia'
import { getDayRecommendSongs } from '@/api/music/index'
import { getDayRecommendPlayList } from '@/api/music/index'
import { getDayRecommendDj } from '@/api/music/index'
import { getDayRecommendNewSongs } from '@/api/music/index'
import { getDayRecommendMv } from '@/api/music/index'
import { getHotSongerList } from '@/api/music/index'

export const recommendStore = defineStore( 'recommend', {
    state: () => {
        return {
            recommendedSongsList: [],
            recommendedPlayList: [],
            recommendDj: [],
            recommendNewSongs: [],
            recommendMv: [],
            hotSongerList: []
        }
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
                paths: [ 'recommendedSongsList', 'recommendedPlayList', 'recommendDj', 'recommendNewSongs', 'recommendMv', 'hotSongerList' ]
            }
        ]
    },
    getters: {

    },
    actions: {
        setRecommendedSongsList ( cookie: string | any ) {
            getDayRecommendSongs( cookie.value ).then( ( res: any ) => {
                console.log( res )
                if ( res.code === 200 ) {
                    this.recommendedSongsList = res.data
                }
            } )
        },
        setRecommendedPlayList ( cookie: string | any ) {
            getDayRecommendPlayList( cookie.value ).then( ( res: any ) => {
                console.log( res )
                if ( res.code === 200 )
                    this.recommendedPlayList = res.recommend
            } )
        },
        setRecommendDj ( cookie: string | any ) {
            getDayRecommendDj( cookie.value ).then( ( res: any ) => {
                if ( res.code === 200 )
                    this.recommendDj = res.djRadios
            } )
        },
        setRecommendNewSongs () {
            getDayRecommendNewSongs().then( ( res: any ) => {
                if ( res.code === 200 )
                    this.recommendNewSongs = res.result
            } )
        },
        setRecommendMv () {
            getDayRecommendMv().then( ( res: any ) => {
                if ( res.code === 200 )
                    this.recommendMv = res.result
            } )
        },
        setHotSongerList () {
            getHotSongerList().then( ( res: any ) => {
                if ( res.code === 200 )
                    this.hotSongerList = res.artists
            } )
        }
    }
} )
