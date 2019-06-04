import { HomeState } from '@/types/views/home.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import api from '@/api/index'
import { code } from '@/config';
// import Login from './login';

interface MenuItem {
  id: number,
  label: string,
  children: SubMenuItem[]
}

interface SubMenuItem {
  id: number,
  label: string,
}

interface TodoItem {
  id: string,
  label: string
}

interface NoteItem {
  id: string,
  label: string
}

interface UserInfo {
  name: string,
  avatarUrl: string
}

const state: HomeState = {
  home: {
    currentMenuId: Number,
    menu: Array<MenuItem>(),
    todoList: Array<TodoItem>(),
    noteList: Array<NoteItem>(),
    userInfo: {},
    addFormVisible: false,
    showAddBtn: false
  }
}

// 强制使用getter获取state
const getters: GetterTree<HomeState, any> = {
  home: (state: HomeState) => state.home,
  currentMenuId: (state: HomeState) => state.home.currentMenuId,
  menu: (state: HomeState) => state.home.menu,
  todoList: (state: HomeState) => state.home.todoList,
  addFormVisible: (state: HomeState) => state.home.addFormVisible,
  userInfo: (state: HomeState) => state.home.userInfo,
  showAddBtn: (state: HomeState) => state.home.showAddBtn
}

// 更改state
const mutations: MutationTree<HomeState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: HomeState, data: HomeState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state.home[key] = data[key]
    }
  }
}

const actions: ActionTree<HomeState, any> = {
  UPDATE_STATE_ASYN({ commit, state: HomeState }, data: HomeState) {
    commit('UPDATE_STATE', data)
  },
  GET_MENU_ASYN({ commit, state: LoginState }) {
    api.Project.getAll(0).then(res => {
      if (res.code === code.success) {
        let arr = Array<MenuItem>();
        res.data.forEach(item => {
          let isExist = false
          arr.forEach(item2 => {
            if (item.parrentId === item2.id) {
              isExist = true
              let obj: SubMenuItem = {
                id: item.id,
                label: item.label
              }
              if (item2) {
                item2.children.push(obj)
              }
            }
          })
          if (!isExist) {
            let obj: MenuItem = {
              id: item.id,
              label: item.label,
              children: []
            }
            arr.push(obj)
          }
        })
        commit('UPDATE_STATE', {
          menu: arr
        })
      }
    })
  },
  SET_CURRENT_MENU({ commit, state: HomeState }, menuId: string) {
    // 基本菜单预留1-9,大于9的为自己添加的菜单,自己添加的才能有增加等操作
    commit('UPDATE_STATE', {
      currentMenuId: parseInt(menuId, 10),
      showAddBtn: parseInt(menuId, 10) > 9 ? true : false
    })
    // 修改menuId后去请求新的todoList
    // actions.UPDATE_TODO_LIST
    api.Todo.getAll(state.home.currentMenuId).then(res => {
      commit('UPDATE_STATE', {
        todoList: res.data
      })
    })
  },
  UPDATE_TODO_LIST({ commit, state: HomeState }) {
    api.Todo.getAll(state.home.currentMenuId).then(res => {
      commit('UPDATE_STATE', {
        todoList: res.data
      })
    })
  },
  TOGGLE_ADDFORM_VISIBLE({ commit, state: HomeState }) {
    if (state.home.addFormVisible) {
      commit('UPDATE_STATE', {
        addFormVisible: false
      })
    } else {
      commit('UPDATE_STATE', {
        addFormVisible: true
      })
    }
  },
  SET_USER_INFO({ commit, state: HomeState }) {
    api.Consumer.userInfo().then(res => {
      commit("UPDATE_STATE", {
        userInfo: res.data
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

