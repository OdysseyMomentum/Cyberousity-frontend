import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueCookies from 'vue-cookies';

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
    meta: {
      requiresAuth: false,
    },
    component: () => import('../views/Feed.vue')
  },
  {
    path: '/submit',
    name: 'Submit',
    meta: {
      requiresAuth: false,
    },
    component: () => import('../views/Submit')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      requiresAuth: false,
    },
    component: () => import('../views/Login')
  },
  {
    path: '/report',
    name: 'Report',
    meta: {
      requiresAuth: false,
    },
    component: () => import('../views/Report')
  },
  {
    path: '/tools',
    name: 'Tools',
    meta: {
      requiresAuth: false,
    },
    component: () => import('../views/Tools')
  },
  {
    path: '/wiki',
    name: 'Wiki',
    meta: {
      requiresAuth: false,
    },
    component: () => import('../views/Wiki')
  },
  {
    path: '/help',
    name: 'Help',
    meta: {
      requiresAuth: false,
    },
    component: () => import('../views/Help')
  },
]


const router = new VueRouter({
  routes
})

const isAuth = function() {
  return VueCookies.get('user-token');
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuth()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
