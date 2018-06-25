import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './utils/mixin'
import WebFont from 'webfontloader'
import './registerServiceWorker'
import './style'
import './icon'

Vue.config.productionTip = false;

WebFont.load({
  google: {
    families: ['Roboto Mono:300,300i,500,500i']
  }
})

Vue.mixin(mixin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
