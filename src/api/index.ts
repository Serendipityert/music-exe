import Axios from "@/util/request";
import { URL } from "@/config";
/** 导入接口返回类型 */
import { resType } from "./mode";

// 参数泛型 <T extends Record<string, any>>
// 表示，给我的参数类型，必须约束于对象形式 即{key：value,...}模式，key类型string，value类型为any
/**
 * 电话号码注册时，发送手机验证码
 * @param data 
 * @returns 
 */
export const sendPhoneVerifyCode = async <T extends Record<string, any>>(data: T | undefined) => {
    /** 
     * @resType 返回台参数类型
     */
    return await Axios<resType>({
        url: URL + "/sendSms",
        method: "post",
        data,
    })
}

/**
 * 校验手机短信验证码
 * @param data 
 * @returns 
 */
export const verifyPhoneCode = async <T extends Record<string, any>>(data: T | undefined) => {

    /** 
     * @resType 返回台参数类型
     */
    return await Axios<resType>({
        url: URL + "/verifySms",
        method: "post",
        data
    })
}

/**
 * 用户电话号码注册
 * @param data 
 * @returns 
 */
export const userPhoneCreate = async <T extends Record<string, any>>(data: T | undefined) => {
    return await Axios<resType>({
        url: URL + '/create',
        method: 'post',
        data
    })
}

/**
 * 用户电话号码登录
 * @param data 
 * @returns 
 */
export const userPhoneLogin = async <T extends Record<string, any>>(data: T | undefined) => {
    return await Axios<resType>({
        url: URL + '/login',
        method: 'post',
        data
    })
}

/**
 * 获取用户信息
 * @returns 
 */
export const getUserInfo = async () => {
    return await Axios<resType>({
        url: URL + '/getUserInfo',
        method: 'get',
    })
}
