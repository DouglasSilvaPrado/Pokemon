import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import About from '../Views/About.vue'
import PokemonTeams from '../Views/PokemonTeams.vue'
import PokemonDetails from '../Views/PokemonDetails.vue'



export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/teams',
      component: PokemonTeams
    },
    {
      path: '/pokemon/:id',
      component: PokemonDetails,
    }
   
   
  ]
})
export default router;