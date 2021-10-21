
/**
 * 配置模拟接口
 * @module mock
 */
import Mock from 'mockjs'
import mockData from './mockData'
// 开发环境
Mock.mock('http://localhost:8080/loginManage', 'post', mockData.login) // 登录验证返回
Mock.mock('http://localhost:8080/getInfo', 'post', mockData.getInfo) // 拉取用户信息
Mock.mock('http://localhost:8080/loginout', 'get', mockData.loginOut) // 退出登录
Mock.mock('http://localhost:8080//menus', 'post', mockData.menus) // 菜单栏

export default Mock
