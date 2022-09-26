import Axios from "@/util/request"
import { BASE_URL_MUSIC } from "@/config"

/**
 * 搜索音乐建议
 * @param data 
 * @returns 
 */
export const searchMusicProposal = async ( data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/search/suggest?keywords=' + data,
        method: 'get'
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
    } )
}