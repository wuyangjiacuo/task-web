import { MainState } from '@/types/views/main.interface';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import api from '@/api/index';

const state: MainState = {
  main: {
    userInfo: {
      name: ''
    }
  }
}

// 强制使用getter获取state
const getters: GetterTree<MainState, any> = {
  // userInfo: (state: MainState) => state.main.userInfo
}

// 更改state
const mutations: MutationTree<MainState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: MainState, data: MainState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state.main[key] = data[key]
    }
  }
}

const actions: ActionTree<MainState, any> = {
  UPDATE_STATE_ASYN({ commit, state: MainState }, data: MainState) {
    commit('UPDATE_STATE', data)
  },
  GET_USER_INFO_ASYN({ commit, state: LoginState }) {
    // console.log(state)
    // api.Consumer.userInfo().then(res => {
    //   console.log(res)
    // })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

