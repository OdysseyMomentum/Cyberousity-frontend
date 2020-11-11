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
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/Feed.vue')
  },
  {
    path: '/submit',
    name: 'Submit',
    component: () => import('../views/Submit')
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
    console.log('Unauthorised, falling back!')
    return next({name: 'Home'});
  }
})

export default router