import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true,  // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

/* 错误处理 */
const resultProcess = (result) => {
  const { data, config } = result
  let resultData = null
  return new Promise((resolve, reject) => {
    if (config.responseType === 'blob') {
      const reader = new FileReader()
      reader.readAsText(data, 'utf-8')
      reader.onload = function () {
        resultData = JSON.parse(reader.result)
        resolve(resultData)
      }
    } else {
      resolve(result.data)
    }
  })
}

/* 请求拦截 */
service.interceptors.request.use(
  (config) => {
    config.paramsSerializer = (params) =>
      qs.stringify(params, { indices: false })
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

/* 响应拦截 */

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.errorCode === 10000) {
      Message.error('连接超时，请重新登录')
      /* 清除token */
      //doSomething
      /* 重新加载页面，跳回登录页 */
      location.reload()

      return Promise.reject(new Error(res.errorMessages))
    } else {
      const { headers, config } = response
      if (config.responseType === 'blob') {
        res.istransfer = headers.istransfer // 0 表示显示“索取原图”，1: 原图传输中， 2 不显示任何按钮
        res.isimage = headers.isimage
      }
      return res
    }
  },
  async (error) => {
    if (error.response) {
      await resultProcess(result).then((res) => {
        Message({
          message: res.errorMessages,
          type: 'error',
          duration: 3 * 1000,
          customClass: 'zZindex'
        })
        return Promise.reject(res)
      })
    } else {
      Message({
        message: '系统错误',
        type: 'error',
        duration: 3 * 1000,
        customClass: 'zZindex'
      })
      return Promise.reject(error)
    }
  }
)

export default service
