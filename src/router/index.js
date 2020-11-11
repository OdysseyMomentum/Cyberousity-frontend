import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Feed.vue')
  }
]

const loginPage = 'Login';
const publicPages = [loginPage];

const router = new VueRouter({
  routes
})

router.beforeEach((before, to, next) => {
  if (!publicPages.includes(to.path) || localStorage.getItem('user-token')) {
    next();
  } else {
    return next({name: loginPage});
  }
})

export default router