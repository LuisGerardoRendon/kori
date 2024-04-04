import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'identificate',
      component: function () {
        return import(/* webpackChunkName: "identificate" */ '../views/identificate/MainIdentificate.vue')
      }
    },
    {
      path: '/home',
      name: 'home',
      component: function () {
        return import(/* webpackChunkName: "identificate" */ '../views/home/Home.vue')
      }
    },
  ]
})

export default router

