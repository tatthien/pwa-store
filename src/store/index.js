import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import setting from './modules/setting'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    setting
  },
  strict: process.env.NODE_ENV
})
