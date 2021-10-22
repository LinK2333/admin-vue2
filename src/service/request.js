import axios from "axios";
import { Message, Loading } from 'element-ui';

// loading
// fail
// clear
let Toast = {
  loading: (data) => {
    console.log(data);
  },
  fail: (data) => {
    console.log(data);
  },
  clear: () => {
    console.log("clear");
  },
};

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
});

let loading = null;

service.interceptors.request.use(
  config => {
    // 挂载拦截处理
    Toast.loading({ duration: 0, message: "加载中..." });

    if(Message) {
      loading = Loading.service({
        lock: true,
        fullscreen: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.1)",
      })
    }

    config.headers["authorization"] = localStorage.getItem("token") || "";
    // url
    // config.url =
    //   config.url +
    //   (config.url.includes("?") ? "&" : "?") +
    //   "terminalName=admin&companyCode=fulan&siteCode=edu";
    return config;
  },
  error => {
    console.log("request interceptor error：" + error);
    return Promise.reject(error);
  }
)

// 响应拦截器
service.interceptors.response.use(response => {
  loading.close();
  return response;
},
error => {
  loading.close();
  return Promise.reject(error);
})

// service.interceptors.response.use(
//   response => {
//     loading && loading.close();

//     const res = response.data;
//     if (!(res.code === 0 || res.code === "1000")) {
//       Toast.fail(res.msg || res.message);
//       if (res.code === -1) {
//         store.dispatch("Logout");
//       }
//       return Promise.reject(res);
//     } else {
//       res.status = true;
//       return res;
//     }
//   },
//   error => {
//     loading.close();
//     return Promise.reject(error)
//   }
// )

export default service
