import Axios from "@/util/request"
import { URL, BASE_URL_MUSIC } from "@/config"
/** 导入接口返回类型 */
import { resType } from "@/api/index"
import { MessagePlugin } from 'tdesign-vue-next'

// 参数泛型 <T extends Record<string, any>>
// 表示，给我的参数类型，必须约束于对象形式 即{key：value,...}模式，key类型string，value类型为any
/**
 * 电话号码注册时，发送手机验证码
 * @param data 
 * @returns 
 */
export const sendPhoneVerifyCode = async <T extends Record<string, any>> ( data: T | undefined ) => {
    /** 
     * @resType 返回台参数类型
     */
    return await Axios<resType>( {
        url: URL + "/sendSms",
        method: "post",
        data,
    } )
}

/**
 * 校验手机短信验证码
 * @param data 
 * @returns 
 */
export const verifyPhoneCode = async <T extends Record<string, any>> ( data: T | undefined ) => {

    /** 
     * @resType 返回台参数类型
     */
    return await Axios<resType>( {
        url: URL + "/verifySms",
        method: "post",
        data
    } )
}

/**
 * 用户电话号码注册
 * @param data 
 * @returns 
 */
export const userPhoneCreate = async <T extends Record<string, any>> ( data: T | undefined ) => {
    return await Axios<resType>( {
        url: URL + '/create',
        method: 'post',
        data
    } )
}

/**
 * 用户电话号码登录
 * @param data 
 * @returns 
 */
export const userPhoneLogin = async <T extends Record<string, any>> ( data: T | undefined ) => {
    return await Axios<resType>( {
        url: URL + '/login',
        method: 'post',
        data
    } )
}

/**
 * 获取用户信息
 * @returns 
 */
export const getUserInfo = async () => {
    return await Axios<resType>( {
        url: URL + '/getUserInfo',
        method: 'get',
    } )
}

/**
 * 网易云登录
 */

/**
 * 二维码 key 生成接口
 * @returns 
 */
export const generateKey = async ( time: number | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/login/qr/key?time=' + time,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 生成二维码图片
 * @param data 
 * @returns 
 */
export const generateQRCode = async ( qrimg: number | undefined, data: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/login/qr/create?qrimg=' + qrimg + '&key=' + data,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 查询二维码状态
 * @param data 
 * @returns 
 */
export const queryQRCodeState = async ( data: string | undefined, time: number | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/login/qr/check?key=' + data + '&time=' + time,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取登录状态
 * @param cookie 
 * @returns 
 */
export const getLoginState = async ( cookie: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/login/status?cookie=' + cookie,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取账号信息
 * @returns 
 */
export const getUserAccount = async () => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/user/account',
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取登录用户信息
 * @param uid 
 * @returns 
 */
export const getUserDetail = async ( uid: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/user/detail?uid=' + uid,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取用户信息 , 歌单，收藏，mv, dj 数量
 * @param cookie 
 * @returns 
 */
export const getUserCollectionMvQuantity = async ( cookie: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/user/subcount?cookie=' + cookie,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取用户歌单
 * @param uid 
 * @returns 
 */
export const getUserPlayList = async ( uid: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/user/playlist?uid=' + uid,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取用户等级信息
 * @param cookie 
 * @returns 
 */
export const getUserLevel = async ( cookie: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/user/level?cookie=' + cookie,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取用户关注列表信息
 * @param uid 
 * @returns 
 */
export const getUserFollows = async ( uid: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/user/follows?uid=' + uid,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取用户粉丝列表信息
 * @param uid 
 * @returns 
 */
export const getUserFolloweds = async ( uid: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/user/followeds?uid=' + uid,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取歌单详情
 * @param id 
 * @returns 
 */
export const getPlayListDetail = async ( id: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/playlist/detail?id=' + id,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取登录用户私信
 * 
 * @param limit 
 * @param cookie 
 * @returns 
 */
export const getPrivateMsg = async ( limit: number | undefined, cookie: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/msg/private?limit=' + limit + '&cookie=' + cookie,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}

/**
 * 获取某个私信的具体内容
 * 
 * @param uid 
 * @param cookie 
 * @returns 
 */
export const getPrivateMsgDetail = async ( uid: string | undefined, cookie: string | undefined ) => {
    return await Axios( {
        url: BASE_URL_MUSIC + '/msg/private/history?uid=' + uid + '&cookie=' + cookie,
        method: 'get'
    } ).catch( ( err: any ) => {
        MessagePlugin.warning( err )
    } )
}