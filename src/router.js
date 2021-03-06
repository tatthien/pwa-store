import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('./views/Account.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ],
});
