import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CustomerEntry',
      component: () => import('../views/CustomerEntry.vue'),
    },
  ],
})

export default router
