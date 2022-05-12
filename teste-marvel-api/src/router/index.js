import { createRouter, createWebHistory } from 'vue-router'
const MarvelCharacters = () => import('../views/MarvelCharacters.vue')
const CharacterPage = () => import('../views/CharacterPage.vue')
const pageNotFound = () => import('../views/pageNotFound.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MarvelCharacters,
    query: { search: null }
  },
  {
    path: '/CharacterPage/:info',
    name: 'CharacterPage',
    component: CharacterPage,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: pageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
