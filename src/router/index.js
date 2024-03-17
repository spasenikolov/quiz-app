import { createRouter, createWebHistory } from 'vue-router'
import AboutView from "@/views/QuizView.vue";
import PlaceHolder from "@/components/PlaceHolder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'placeholder',
      component: () => import('../components/PlaceHolder.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('../views/QuizView.vue')
    }
  ]
})

export default router
