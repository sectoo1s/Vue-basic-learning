import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    redirect:"/about/us",
    component: () => import('../views/AboutView.vue'),
    children:[
      {
        path:'us',
        name:'us',
        component: () => import('../views/AboutSub/AboutUS.vue')
      },
      {
        path:'info',
        name:'info',
        component: () => import('../views/AboutSub/AboutInfo.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
