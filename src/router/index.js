import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue')
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import(/* webpackChunkName: "Intro" */ '../views/Intro.vue')
  },
  {
    path: '/building',
    name: 'Building',
    component: () => import(/* webpackChunkName: "Building" */ '../views/Building.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
