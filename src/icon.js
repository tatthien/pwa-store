import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
  faShoppingCart,
  faStore,
  faUserAlt,
  faHeart,
  faCog,
  faBell,
  faInfo
 } from '@fortawesome/free-solid-svg-icons'

library.add([
  faShoppingCart,
  faStore,
  faUserAlt,
  faHeart,
  faCog,
  faBell,
  faInfo
])

Vue.component('FontAwesome', FontAwesomeIcon)
