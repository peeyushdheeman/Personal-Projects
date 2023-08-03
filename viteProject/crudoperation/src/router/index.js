import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/login.vue'
import SignupPage from '../components/signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signUP',
      component: SignupPage
    },
    
  ]
})

export default router
