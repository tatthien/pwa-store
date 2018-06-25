const ADD_SETTINGS = 'addSettings'

export default {
  namespaced: true,
  state: {
    settings: {
      page_title: process.env.VUE_APP_PAGE_TITLE
    }
  },
  getters: {
    settings: state => state.settings
  },
  actions: {
    addSettings ({ commit }, { key, value }) {
      commit(ADD_SETTINGS, key, value)
    }
  },
  mutations: {
    [ADD_SETTINGS] (state, key, value) {
      let obj = {}
      obj[key] = value
      state.settings = Object.assign(state.settings, obj)
    }
  }
}
