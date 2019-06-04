import { LoginState } from '@/types/views/login.interface';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { setToken } from '@/utils/common';
import api from '@/api/index';
import Router from './../../router';

const state: LoginState = {
  login: {
   author: undefined,
   isLogin: false
  }
}

interface LoginInfo {
  phone: string,
  password: string
}

// 强制使用getter获取state
const getters: GetterTree<LoginState, any> = {
  author: (state: LoginState) => state.login.author,
  isLogin: (state: LoginState) => state.login.isLogin
}

// 更改state
const mutations: MutationTree<LoginState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: LoginState, data: LoginState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<LoginState, any> = {
  UPDATE_STATE_ASYN({ commit, state: LoginState }, data: LoginState) {
    commit('UPDATE_STATE', data)
  },
  CHECK_LOGIN_STATE({ commit, state: LoginState }) {
    api.Consumer.isLogin().then(res => {
      if (res.code === 200) {
        commit('UPDATE_STATE', { 
          login: {
            isLogin: true
          }
        })
        Router.push('/home')
      } else {
        commit('UPDATE_STATE', { 
          login: {
            isLogin: false
          }
        })
        Router.push('/login')
      }
    })
  },
  LOGIN_THEN_GO_HOME({commit, state: LoginState}, loginInfo: LoginInfo) {
    api.Consumer.login(loginInfo).then(res => {
      if (res.code === 200) {
        setToken('login')
        commit('UPDATE_STATE', { 
          login: {
            isLogin: true
          }
        })
        Router.push('/home')
      }
    })
  },
  LOGOUT_THEN_GO_LOGIN({commit, state: LoginState}) {
    setToken('')
    commit('UPDATE_STATE', { 
      login: {
        isLogin: false
      }
    })
    Router.push('/login')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

