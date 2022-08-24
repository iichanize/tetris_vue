import {createRouter, createWebHistory} from 'vue-router'
import Stage from './components/Stage.vue'
import Ranking from './components/Ranking.vue'
//
// 他のコンポーネントは省略

export default createRouter({
    history: createWebHistory('/'),
    routes: [
    {
      path: '/',
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