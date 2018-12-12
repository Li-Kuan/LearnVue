import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home'
      },
      component: () => import( /* webpackChunkName: "about" */ './views/Home.vue')
    }, {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/learn',
      name: 'learn',
      meta: {
        title: 'Learn'
      },
      component: () => import( /* webpackChunkName: "Learn" */ './components/Learn.vue')
    }, {
      path: '/VueCompontent',
      name: 'VueCompontent',
      meta: {
        title: 'VueCompontent'
      },
      component: () => import( /* webpackChunkName: "Learn" */ './components/VueCompontent.vue')
    }
  ]
})
