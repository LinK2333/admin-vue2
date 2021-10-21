import { loginService, getInfo } from '@/service/LoginService'
const user = {
  state: {
    user: '',
    status: '',
    email: '',
    code: '',
    uid: undefined,
    token: localStorage.getItem('token'),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = '';
    }
  },
  actions: {
    // 用户登录
    login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      loginService(userInfo).then(res => {
        const { status, result } = res.data
        commit('SET_TOKEN', result)
        localStorage.setItem('token',result)
        resolve(res.data)
      })
    }).catch(error => {
        reject(error)
      })
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(res => {
          const {  result: { userList, role } } = res.data
          commit('SET_ROLES', userList)
          commit('SET_NAME', userList.name)
          commit('SET_UID', userList.uid)
          resolve(res.data)
        })
      }).catch(error => {
        reject(error)
      })
    },
  }
}


export default user
