import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Results from '../views/Results'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/result/:cert',
    name: 'Results',
    component: Results
  },
  {
    path: '/:pathMatch(.*)',
    redirect: { name: 'Home' }
  }
]

export default new VueRouter({
  // mode: 'history',
  routes
})
