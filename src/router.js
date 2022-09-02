import {createRouter, createWebHistory} from 'vue-router'
import Stage from './components/Stage.vue'
import Ranking from './components/Ranking.vue'
import Top from './components/TopPage.vue'

export default createRouter({
    history: createWebHistory('/'),
    routes: [
      {
        path: '/',
        name: 'TopPage',
        component: Top
      },
    {
      path: '/tetris',
      name: 'game',
      component: Stage
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking 
    }
  ]
})