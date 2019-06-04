/*
 * @Author: jiangxiaoxiang 
 * @Date: 2019-05-27 11:42:53 
 * @Last Modified by: jiangxiaoxiang
 * @Last Modified time: 2019-05-27 15:07:24
 */

// 定义状态码
export const code = {
  success: 200,
  failed: 500,
  unAuth: 401
}
/** 
 * 线上环境
 */
export const ONLINEHOST: string = 'https://xxx.com'

/** 
 * 测试环境
 */
export const QAHOST: string = 'http://xxx.com'

/** 
 * 线上mock
 */
export const MOCKHOST: string = 'http://xxx.com'

/** 
 * 是否mock
 */
export const ISMOCK: boolean = true

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST: string = ONLINEHOST

/**
 * 请求的公共参数
 */
export const conmomPrams: any = {}

/**
 * @description token在Cookie中存储的天数，默认1天
 */
export const cookieExpires: number = 1
