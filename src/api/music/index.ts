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