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
    path: '/result',
    name: 'Results',
    component: Results,
    props: route => ({ qr: route.params.qr }),
    beforeEnter: (to, from, next) => {
      if (!to.params.qr) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
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
