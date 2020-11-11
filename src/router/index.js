import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import app from "@/main";

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

const loginPath = '/';
const publicPaths = [loginPath];

const router = new VueRouter({
  routes
})

router.beforeEach((before, to, next) => {
  if (publicPaths.includes(to.path) || localStorage.getItem('user-token') || app.$cookies.get('user-token')) {
    next();
  } else {
    return next({path: loginPath});
  }
})

export default router