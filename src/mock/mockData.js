/**
 * 模拟接口(数据)
 * @module mock
 * userList {用户信息}
 * menus {菜单栏}
 */

 import Mock from 'mockjs'
 const userList = [
   {
     usersname: 'admin',
     token: 'token1',
     password: 123456,
     introduction: '我是超级管理员',
     role: ['admin'],
     name: 'Super Admin',
     uid: '001'
   },
   {
     usersname: 'linkai',
     token: 'token2',
     password: 123456,
     introduction: '我是林彦祖',
     role: ['common'],
     name: 'User',
     uid: '002'
   }
     ]

 export default {
     /**
      * 验证登录
      * 返回token值
      */
     login: config => {
       const data = JSON.parse(config.body);
       const { username, password } = data
       const isUser = userList.some(item => item.usersname == username)
       const result = userList.find(item => { return item.usersname == username && item.password == password })
         if (!isUser) {
             return { status: 1000, msg: '用户不存在', result: '' }
         } else if (userList.some(item => { return item.usersname == username && item.password == password })) {
             return { status: 200, msg: '登录成功', result: result.token }
         } else {
             return { status: 1001, msg: '密码错误', result: '' }
         }
   },
     /**
      * 拉取用户信息
      * 返回用户信息，角色
      */
     getInfo: config => {
       const data = config.body
       const result = userList.find(item => item.token == data)
       if (userList.some(item => item.token == data)) {
         return { status : 200, text: '拉取用户信息成功' , result: {userList: result , role: result.role} }
       }
     },
     // 退出登录
     loginOut: config => { return { status: 200, text: '退出登录成功', result: '' } },
 }
