import router from './router'
import store from './store'

// 白名单
const whiteList = ['/Login','/']

router.beforeEach(async(to, from, next) => {
    const token = localStorage.getItem('token')
    if (token) {
      if (to.path === '/Login') {
        next()
      } else {
        const hasRoles = store.getters.roles && Object.keys(store.getters.roles).length > 0
        if (hasRoles) {  // 判断当前用户事是否已拉取完user_info信息
          next()
        }else {
          try {
            const { status, result: { role } } = await store.dispatch('GetInfo') // 拉取用户信息 获取role角色
            console.log(role)
            if (status == 200) {
              let accessRoutes = await store.dispatch('generateRoutes', role)    //   根据角色生成可访问路由映射
              router.addRoutes(accessRoutes)
              next({ ...to, replace: true })  // hack方法，以确保addRoutes是完整的  设置replace: true，这样导航就不会留下历史记录
            } else {
              router.app.$message.warning('用户信息拉取失败哦')
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()            // 白名单,直接过
      } else {
        next('/Login')   // 没有访问权限的其他页面被重定向到登录页面
      }
    }
  })
