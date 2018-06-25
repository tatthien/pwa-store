import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
  faShoppingCart,
  faStore,
  faUserAlt,
  faHeart,
  faCog,
  faBell
 } from '@fortawesome/free-solid-svg-icons'

library.add([
  faShoppingCart,
  faStore,
  faUserAlt,
  faHeart,
  faCog,
  faBell
])

Vue.component('FontAwesome', FontAwesomeIcon)
