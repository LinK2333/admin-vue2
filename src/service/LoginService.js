
 import request from "./request.js";

 /**
  * login service
  * @param {object} data
  * @returns
  */
 export const loginService = (data) =>
  request({
    url: "loginManage",
    method: "post",
    data,
  });

  // getInfo
  export const getInfo = (data) =>
  request({
    url: "getInfo",
    method: "post",
    data,
  });
