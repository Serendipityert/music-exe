import Axios from "@/util/request"
import { BASE_URL_MUSIC } from "@/config"
import { MessagePlugin } from 'tdesign-vue-next'

/**
 * 搜索音乐建议
 * @param data 
 * @returns 
 */
export const searchMusicProposal = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/search/suggest?keywords=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 热搜榜
 * @returns 
 */
export const hotSearchMusic = async () => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/search/hot/detail',
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 根据歌曲id获取歌曲URL
 * @param data 
 * @returns 
 */
export const getMusicUrl = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/song/url?id=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        console.log( err )
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 根据歌曲id获取歌曲歌词
 * @param data 
 * @returns 
 */
export const getMusicLyric = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/lyric?id=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 根据歌手id获取歌手详细信息
 * @param data 
 * @returns 
 */
export const getSongerDetail = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/artist/detail?id=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 根据歌手id获取歌手热门的 50 首歌曲
 * @param data 
 * @returns 
 */
export const getHotMusicBySongId = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/artist/top/song?id=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 根据歌手id获取歌手所有歌曲
 * @param data 
 * @returns 
 */
export const getMusicListBySongId = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/artist/songs?id=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 根据歌手id获取歌手描述信息
 * @param data 
 * @returns 
 */
export const getSongerBriefDesc = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/artist/desc?id=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 根据歌手id获取歌手专辑信息
 * @param data 
 * @returns 
 */
export const getSongerAlbum = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/artist/album?id=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 根据专辑id获取专辑内容信息
 * @param data 
 * @returns 
 */
export const getAlbumContent = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/album?id=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 根据歌曲名搜索歌曲
 * @param data 
 * @returns 
 */
export const songSearch = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/cloudsearch?keywords=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取每日推荐歌曲
 * @param cookie 
 * @returns 
 */
export const getDayRecommendSongs = async ( cookie: string | undefined | any ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/recommend/songs?cookie=' + cookie,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取每日推荐歌单
 * @param cookie 
 * @returns 
 */
export const getDayRecommendPlayList = async ( cookie: string | undefined | any ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/recommend/resource?cookie=' + cookie,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取每日推荐电台
 * @param cookie 
 * @returns 
 */
export const getDayRecommendDj = async ( cookie: string | undefined | any ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/dj/recommend?cookie=' + cookie,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取推荐新歌
 * @returns 
 */
export const getDayRecommendNewSongs = async () => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/personalized/newsong',
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取推荐mv
 * @returns 
 */
export const getDayRecommendMv = async () => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/personalized/mv',
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取热门歌手
 * @returns 
 */
export const getHotSongerList = async ( num: number | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/top/artists?offset=0&limit=' + num,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 按照分类获取歌手
 * @returns 
 */
export const getSongerList = async ( type: number | undefined, area: number | undefined, initial: string | undefined, limit: number | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/artist/list?type=' + type + '&area=' + area + '&initial=' + initial + '&limit=' + limit,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取电台分类
 * @returns 
 */
export const getRadioClassification = async () => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/dj/catelist',
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取电台今日优选
 * @returns 
 */
export const getRadioClassificationTodayPreferred = async () => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/dj/today/perfered',
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取电台详情
 * @returns 
 */
export const getRadioClassificationDetail = async ( rid: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/dj/detail?rid=' + rid,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取付费精选电台
 * @returns 
 */
export const getPayRadioClassification = async ( limit: number | undefined, offset: number | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/dj/paygift?limit=' + limit + '&offset=' + offset,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取电台个性推荐
 * @returns 
 */
export const getRadioPersonalizedRecommend = async ( limit: number | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/dj/personalize/recommend?limit=' + limit,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}