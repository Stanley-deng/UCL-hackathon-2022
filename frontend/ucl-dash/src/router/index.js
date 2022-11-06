import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: import('../views/DashView.vue')
    },
    {
      path:'/login',
      name: 'login',
      component: import('../views/LoginView.vue')
    }
  ]
})

export default router
