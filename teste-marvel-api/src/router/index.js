import { createRouter, createWebHistory } from 'vue-router'
import MarvelCharacters from '../views/MarvelCharacters.vue'
import CharacterPage from '../views/CharacterPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MarvelCharacters
  },
  {
    path: '/CharacterPage/:info',
    name: 'CharacterPage',
    component: CharacterPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
