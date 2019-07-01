import Vue from 'vue';
import Router from 'vue-router';
import routes from './routers';
import { subTitle } from '@/libs/utils';

Vue.use(Router);
const router = new Router({
  routes,
  base: process.env.BASE_URL,
  mode: 'hash',
});

router.beforeEach((to, from, next) => {
  // if (to.path === '/login') {
  //   window.sessionStorage.removeItem('user');
  // }
  // try {
  //   const userData = window.sessionStorage.getItem('user');
  //   if (!userData && to.path !== '/login') {
  //     next({ path: '/login' });
  //   } else {
  //     next();
  //   }
  // } catch {
  //   next();
  // }
});

router.afterEach((to, from) => {
  subTitle(to);
});

export default router;
