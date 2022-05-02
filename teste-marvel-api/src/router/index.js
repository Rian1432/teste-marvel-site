import { createRouter, createWebHistory } from 'vue-router'
import MarvelCharacters from '../views/MarvelCharacters.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MarvelCharacters
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
