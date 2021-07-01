import axios, { ResponseData } from './index'
import { AxiosPromise } from 'axios'
export const getBanner = (): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/studentServer/userCommon/getBanner',
    method: 'get'
  })
}
// post请求
interface LoginReqArguInterface {
  userName: string
  password: string|number
}
export const loginReq = (data: LoginReqArguInterface): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/api/user/login',
    data,
    method: 'POST'
  })
}
