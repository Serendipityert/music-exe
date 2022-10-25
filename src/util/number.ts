/**
 * 生成随机数
 * @param max 
 * @returns 
 */
export const getRandomNumber = (max: number): number => {

    return Math.floor(Math.random() * (max))

}

/**
 * 大额数值格式化
 * @param num 
 * @returns 
 */
export const numberFormat = (num: number | any) => {
    if (num > 10000) {
        let result = num / 10000
        result = Math.floor(result * 100) / 100
        var s_x = result.toString() //将数字转换为字符串
        var pos_decimal = s_x.indexOf('.') //小数点的索引值
        // 当整数时，pos_decimal=-1 自动补0
        if (pos_decimal < 0) {
            pos_decimal = s_x.length
            s_x += '.'
        }
        // 当数字的长度< 小数点索引+2时，补0
        while (s_x.length <= pos_decimal + 2) {
            s_x += '0'
        }
        s_x += '万'
    } else {
        s_x = num
    }
    return s_x
}
