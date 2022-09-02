import {createRouter, createWebHistory} from 'vue-router'
import Stage from './components/Stage.vue'
import Ranking from './components/Ranking.vue'
import Top from './components/TopPage.vue'

export default createRouter({
    history: createWebHistory('/'),
    routes: [
      {
        path: '/',
        name: 'Top',
        component: Top
      },
    {
      path: '/tetris',
      name: 'Tetris',
      component: Stage
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking 
    }
  ]
})