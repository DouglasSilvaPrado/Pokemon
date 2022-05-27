import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PokemonTeams from '../views/PokemonTeams.vue'
import PokemonDetails from '../views/PokemonDetails.vue'



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