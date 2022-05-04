import { createRouter, createWebHistory } from 'vue-router'
import MarvelCharacters from '../views/MarvelCharacters.vue'
import CharacterView from '../views/CharacterPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MarvelCharacters
  },
  {
    path: '/CharacterView',
    name: 'CharacterView',
    component: CharacterView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
