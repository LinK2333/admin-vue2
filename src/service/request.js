import axios from "axios";
import { MessageBox, Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
});

service.interceptors.request.use(
  config => {
    // 挂载拦截处理
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (!(res.code === 0 || res.code === "1000")) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(res)
    } else {
      res.status = true
      return res
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service