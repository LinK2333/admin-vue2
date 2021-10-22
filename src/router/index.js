import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/Layout/layout.vue'
import Demo from "@/views/Demo/Demo.vue";

Vue.use(VueRouter);

/**
 * hidden：true       当设置 true 的时候该路由不会在侧边栏出现
 * alwaysShow：true   当设置 true 的时候代表单路由
 * meta: {
 *   roles: ['admin', 'editor'] //设置该路由进入的权限，支持多个权限叠加
 *   title: 'title' //设置该路由在侧边栏和面包屑中展示的名字
 *   icon: 'xxxx' //设置该路由的图标
 * }
 */

/**
 * constantRoutes
 * 没有权限的基本页
 * 所有用户都可以访问
 */

  export const constantRoutes = [{
    path: '/',
    redirect: '/login',
    hidden: true,
  },
  {
    path: '/login',  // 登陆界面
    name: 'Login',
    hidden: true,
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/index.vue'),
    meta: { title: '登陆'  }
  }
  ]

/**
 * asyncRoutese
 * 带权限的路由页
 * 拥有权限的用户可以访问
 * 需要根据用户角色动态加载的路由
 */
  export const asyncRoutes = [
    {
      path: '/exam',
      component: Layout,
      hidden: false,
      alwaysShow: true,
      children: [{
        path: '/exam/index',
        name: '考试',
        hidden: false,
        meta: { title: '考试', roles: ['admin', 'common'], icon: 'el-icon-s-tools', },
        component: () => import(/* webpackChunkName: "Login" */ '@/views/Tool/Exam/index.vue'),
      }]
    },
    {
      path: '/clazz',
      component: Layout,
      name: '班级管理',
      hidden: false,
      meta: { title: '班级管理', role: ['admin', 'common'], icon: 'el-icon-user-solid', },
      children:[
        {
          path: '/clazz/underline',
          name: '线下课程库',
          hidden: false,
          alwaysShow: true,
          meta: { title: '线下课程库', roles: ['admin', 'common'], icon: 'el-icon-menu', },
          children: [
            {
              path: '/clazz/underline/underlineclass',
              name: '线下课程分类',
              hidden: false,
              meta: { title: '线下课程分类', roles: ['admin', 'common'], icon: 'el-icon-s-tools', },
              component: () => import(/* webpackChunkName: "Clazz" */ '@/views/Clazz/UnderLine/UnderLineClass.vue'),
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'Page404',
      hidden: true,
      component: () => import(/* webpackChunkName: "404" */ '@/views/404'),
      meta: { role: ['admin', 'common'] }
    }
]

/**
 * 实例化vue的时候只挂载constantRouter
 */
const createRouter = () => new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRoutes,
});

/**
 * addRouter 方法仅仅只是添加新的路由，并没有剔除原先路由
 * 当用户切换账号，不刷新页面，路由中会存在2个用户的路由 => 手动刷新页面不存在此问题
 * router的matcher方法返回一个新的router对象
 * 将新的router赋值给当前页面管理的router，以达到更新的目的
 *
 */

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router;

/**
 * 解决路由报错问题
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
return originalPush.call(this, location).catch(err => err)
}
