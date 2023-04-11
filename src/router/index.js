import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/menu',
      name: 'about',

      component: () => import('../views/menu.vue')
    },
    {
      path: '/menu',
      name: 'about',

      component: () => import('../views/menu.vue')
    }
  ]
})

export default router
