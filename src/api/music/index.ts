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