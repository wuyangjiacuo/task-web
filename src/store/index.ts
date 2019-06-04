/*
 * @Author: jiangxiaoxiang 
 * @Date: 2019-05-27 11:45:45 
 * @Last Modified by: jiangxiaoxiang
 * @Last Modified time: 2019-05-28 16:16:59
 */
import Vue from 'vue'
import Vuex from 'vuex'

// modules
import Login from './module/login';
import Home from './module/home';
import Main from './module/main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    // 
    Login,
    Home,
    Main
  }
})