import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/fruits',
      name: 'home',
    },
    {
      path: '/fruits',
      component: () => import('@/components/PageFruits'),
      name: 'fruits',
      meta: {
        // leftMenu: Left.FruitsList,
      },
    },
    {
      path: '/fruit/:key',
      component: () => import('@/components/PageFruit'),
      name: 'fruit',
      meta: {
        // leftMenu: Left.FruitsList,
      },
    },
  ],
});
